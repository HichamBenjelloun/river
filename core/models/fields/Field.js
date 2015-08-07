
class Field {

  static TYPE = 'type';
  static REQUIRED = 'required';

  constructor(value=undefined, options={}, validators={}) {
    this._value = value;
    this._options = options;
    this._options[Field.TYPE] = this.constructor.name;

    this._validators = validators;
    this._validators[Field.TYPE] = this.hasTypeError.bind(this);
    this._validators[Field.REQUIRED] = this.hasRequiredError.bind(this);

    if (this.setValidators)
      this.setValidators();
  }

  get value() {
    return this._value;
  }

  get options() {
    return this._options;
  }

  setValidator(name, callback) {
    this._validators[name] = callback.bind(this);
  }

  hasRequiredError() {
    return this._options[Field.REQUIRED] ?
    this.value === undefined || this.value.length == 0 : false;
  }

  hasError(optionName) {
    if(!this.hasTypeError()) {
      if (this._options[optionName])
        return this._validators[optionName]();
      else
        return true;
    } else {
      return true;
    }
  }

  hasErrors() {
    for(let key of Object.keys(this._options)) {
      if(this.hasError(key)) {
        return true;
      }
    }

    return false;
  }

  getErrors() {
    let errors = [];

    for(let key of Object.keys(this._options)) {
      if(this._validators[key]()) {
        errors.push(key);
      }
    }

    return errors;
  }

}

export default Field;
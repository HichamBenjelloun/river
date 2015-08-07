

class Model {

  constructor(values) {
    this._values = values;
    this._fields = {};
    this.setFields();
  }

  get values() {
    return this._values;
  }

  setField(name, field) {
    this._fields[name] = field;
  }

  setFields() {
    if(this.fields) {
      let fields = this.fields();

      for(let key of Object.keys(fields)) {
        this.setField(key, fields[key]);
      }
    } else {
      console.error("(MethodNotImplemented) Class " + this.constructor.name +
          "should implement method `fields()`");
    }
  }

  setValue(name, value) {
    this._values[name] = value;
    this.setFields();
  }

  getValue(name) {
    return this._values[name];
  }

  hasErrors() {
    for(let key of Object.keys(this._fields)) {
      if(this._fields[key].hasErrors()) {
        return true;
      }
    }

    return false;
  }

  getErrors() {
    let errors = {};

    for(let key of Object.keys(this._fields)) {
      if(this._fields[key].hasErrors()) {
        errors[key] = this._fields[key].getErrors();
      }
    }

    return errors;
  }

}

export default Model;
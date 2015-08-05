
import validator from 'validator';
import Field from './Field.js';

class IntegerField extends Field {

  static MIN_VALUE = 'min_value';
  static MAX_VALUE = 'max_value';

  constructor(value, options) {
    super(value, options);
  }

  setValidators() {
    this.setValidator(IntegerField.MIN_VALUE, this.hasMinValueError);
    this.setValidator(IntegerField.MAX_VALUE, this.hasMaxValueError);
  }

  setDefaultErrorMessages() {
    this.setErrorMessage(IntegerField.MIN_VALUE, "La valeur de ce champs doit être supérieure à " +
        this.options[IntegerField.MIN_VALUE]);
    this.setErrorMessage(IntegerField.MIN_VALUE, "La valeur de ce champs doit être inférieure à " +
        this.options[IntegerField.MAX_VALUE]);
  }

  hasTypeError() {
    return validator.isInt(this.value);
  }

  hasMinValueError() {
    return Number(this.value) < this.options[IntegerField.MIN_VALUE];
  }

  hasMaxValueError() {
    return Number(this.value) > this.options[IntegerField.MAX_VALUE];
  }

}

export default IntegerField;
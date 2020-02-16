
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

  hasTypeError() {
    return !validator.isInt(this.value);
  }

  hasMinValueError() {
    return Number(this.value) < this.options[IntegerField.MIN_VALUE];
  }

  hasMaxValueError() {
    return Number(this.value) > this.options[IntegerField.MAX_VALUE];
  }

}

export default IntegerField;

import validator from 'validator';
import Field from './Field.js';

class BooleanField extends Field {

  constructor(value, options) {
    super(value, options);
  }

  hasTypeError() {
    return !validator.isBoolean(this.value);
  }

}

export default BooleanField;
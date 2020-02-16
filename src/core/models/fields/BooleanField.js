
import validator from 'validator';
import Field from './Field.js';

class BooleanField extends Field {

  hasTypeError() {
    return !validator.isBoolean(this.value);
  }

}

export default BooleanField;
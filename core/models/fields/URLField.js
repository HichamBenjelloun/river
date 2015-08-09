
import validator from 'validator';
import Field from './Field.js';

class URLField extends Field {

  constructor(value, options) {
    super(value, options);
  }

  hasTypeError() {
    return !validator.isURL(this.value);
  }

}

export default URLField;
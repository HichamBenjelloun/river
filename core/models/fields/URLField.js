
import validator from 'validator';
import Field from './Field.js';

class URLField extends Field {

  static MAX_LENGTH = 'max_length';

  constructor(value, options) {
    super(value, options);
  }

  setValidators() {
    this.setValidator(URLField.MAX_LENGTH, this.hasMaxLengthError);
  }

  setDefaultErrorMessages() {
    this.setErrorMessage(URLField.MAX_LENGTH, "La longueur de ce champs doit être inférieure à "
        + this.options[URLField.MAX_LENGTH]);
  }

  hasTypeError() {
    return validator.isURL(this.value);
  }

  hasMaxLengthError() {
    return this.value.length > this.options[URLField.MAX_LENGTH];
  }

}

export default URLField;
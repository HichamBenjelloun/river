
import validator from 'validator';
import Field from './Field.js';

class CharField extends Field {

  static MAX_LENGTH = 'max_length';

  constructor(value, options) {
    super(value, options);
  }

  setValidators() {
    this.setValidator(CharField.MAX_LENGTH, this.hasMaxLengthError);
  }

  setDefaultErrorMessages() {
    this.setErrorMessage(CharField.MAX_LENGTH, "La longueur de ce champs doit être inférieure à "
        + this.options[CharField.MAX_LENGTH]);
  }

  hasTypeError() {
    return false;
  }

  hasMaxLengthError() {
    return this.value.length > this.options[CharField.MAX_LENGTH];
  }

}

export default CharField;
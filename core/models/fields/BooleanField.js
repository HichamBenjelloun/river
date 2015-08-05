
import validator from 'validator';
import Field from './Field.js';

class BooleanField extends Field {

  constructor(value, options) {
    super(value, options);
  }

  setValidators() {
    // Pas de validation autre que le type du champs.
  }

  setDefaultErrorMessages() {
    // Pas d'autre message d'erreur que le type.
  }

  hasTypeError() {
    return !validator.isBoolean(this.value);
  }

}

export default BooleanField;
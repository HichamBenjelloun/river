
import Field from './Field.js';

class CharField extends Field {

  static MAX_LENGTH = 'max_length';

  setValidators() {
    this.setValidator(CharField.MAX_LENGTH, this.hasMaxLengthError);
  }

  hasTypeError() {
    return false;
  }

  hasMaxLengthError() {
    return this.value.length > this.options[CharField.MAX_LENGTH];
  }

}

export default CharField;
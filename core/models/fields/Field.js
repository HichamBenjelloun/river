/**
 * Classe mère des champs avec validation.
 *
 * Permet de définir une "interface" permettant de décrire le fonctionnement
 * d'un champs avec contraintes paramétrées.
 *
 * Chaque classe dérivée de cette classe doit implémenter les méthodes suivantes:
 *
 *   `hasTypeError()` : permet de vérifier si le type du champs est valide.
 *   `setValidators()` : permet d'ajouter les fonctions de validations associés à chaque champs.
 *   `setErrorMessages()` : permet de définir des messages d'erreur personnalisés.
 */

class Field {

  static TYPE = 'type';
  static REQUIRED = 'required';

  constructor(value=undefined, options={}, validators={}) {
    this._value = value;
    this._options = options;
    this._options[Field.TYPE] = this.constructor.name;

    this._validators = validators;
    this._validators[Field.TYPE] = this.hasTypeError.bind(this);
    this._validators[Field.REQUIRED] = this.hasRequiredError.bind(this);

    this._errorMessages = {};

    if (this.setValidators)
      this.setValidators();
    else
      console.error("Méthode non implémentée. La classe " + this.constructor.name +
          "n'implémente pas la méthode `setValidators()`.");

    this.setErrorMessage(Field.TYPE, "Ce champs ne correspond pas au type " +
        this.constructor.name);

    this.setErrorMessage(Field.REQUIRED, "Ce champs est absent.");

    if(this.setDefaultErrorMessages)
      this.setDefaultErrorMessages();
    else
      console.log("Méthode non implémentée. La classe " + this.constructor.name +
          " n'implémente pas la méthode `setDefaultErrorMessages()`.");
  }


  get value() {
    return this._value;
  }

  get options() {
    return this._options;
  }

  /**
   * Définit un validateur permettant de vérifier si la contrainte définie par
   * l'option de nom `name` est bien vérifiée.
   *
   * @param name
   * @param callback
   */
  setValidator(name, callback) {
    this._validators[name] = callback.bind(this);
  }

  /**
   * Vérifie si le champs respecte la contrainte REQUIRED si elle est définie en option.
   *
   * @returns {boolean}
   */
  hasRequiredError() {
    return this._options[Field.REQUIRED] ?
    this.value === undefined || this.value.length == 0 : false;
  }


  /**
   * Vérifie si la contrainte définie par l'option `optionName` est vérifiée.
   *
   * @param optionName
   * @returns {boolean}
   */
  hasError(optionName) {
    if(!this.hasTypeError()) {
      if (this._options[optionName])
        return this._validators[optionName]();
      else
        return true;
    } else {
      return true;
    }
  }

  /**
   * Vérifie si le champs a au moins une erreur.
   *
   * @returns {boolean}
   */
  hasErrors() {
    for(let key of Object.keys(this._options)) {
      if(this.hasError(key)) {
        return true;
      }
    }

    return false;
  }

  /**
   * Récupère l'ensemble des messages d'erreurs des champs ne respectant pas le contraintes
   * définies en option.
   *
   * @returns {{}}
   */
  getErrors() {
    let errors = {};

    for(let key of Object.keys(this._options)) {
      if(this._validators[key]()) {
        errors[key] = this.getErrorMessage(key);
      }
    }

    return errors;
  }

  /**
   * Définit un message d'erreur associé à une contrainte non respectée.
   *
   * @param errorTypeName
   * @param message
   */
  setErrorMessage(errorTypeName, message) {
    this._errorMessages[errorTypeName] = message;
  }

  /**
   * Retourne le message d'erreur associé à un erreur.
   *
   * @param errorTypeName
   * @returns {*}
   */
  getErrorMessage(errorTypeName) {
    return this._errorMessages[errorTypeName];
  }

}

export default Field;
/**
 * Classe mère des modèles. Chaque modèle encapsule un objet JSON et fournit un validateur de champs.
 *
 * Chaque classe dérivée de `Model` doit implémenter la méthode `setFields()` permettant de définir
 * le type et les contraintes de chaque champs.
 *
 * Chaque classe dérivée permet de définir les types et les options de chaque champs.
 * Par exemple, pour définir un champs texte requis de nom `text` de longueur inférieure à 10,
 * dans un modèle nommé Todo:
 *
 *   setField('text', new CharField(this.values['text'], {required: true, max_length: 10}))
 *
 *  Si l'on crée un objet à partir de ce modèle, on peut vérifier le respect des contraintes du modèle
 *  à l'aide de la méthode `hasErrors()` qui renvoie un booléen et récupérer les éventuelle erreurs
 *  à l'aide de la méthode `getErrors()` qui renvoie un tableau associatif liant les noms des champs
 *  à leurs messages d'erreurs.
 *
 *  Un fois l'objet crée, on peut éditer un champs particulier à l'aide de la méthode `setValue()`.
 *
 */

class Model {

  constructor(values) {
    this._values = values;
    this._fields = {};
    if(this.setFields)
      this.setFields();
    else
      console.error("Erreur, la classe " + this.constructor.name +
          " n'implémente pas la méthode `setFields()`");
  }

  /**
   * Renvoie l'ensemble des valeurs de l'objet.
   *
   * @returns {*}
   */
  get values() {
    return this._values;
  }

  /**
   * Spécifie un champs particulier à l'aide d'une classe dérivée de Field.
   *
   * @param name
   * @param field
   */
  setField(name, field) {
    this._fields[name] = field;
  }

  /**
   * Attribue la valeur `value` à l'attribut de nom `name` de l'objet.
   *
   * @param name
   * @param value
   */
  setValue(name, value) {
    this._values[name] = value;
    this.setFields();
  }

  /**
   * Renvoie la valeur de l'attribut de nom  `name`.
   *
   * @param name
   * @returns {*}
   */
  getValue(name) {
    return this._values[name];
  }

  /**
   * Renvoie `true` si l'objet ne respecte pas une des contraintes
   * spécifiées dans le modèle, et `false` sinon.
   *
   * @returns {boolean}
   */
  hasErrors() {
    for(let key of Object.keys(this._fields)) {
      if(this._fields[key].hasErrors()) {
        return true;
      }
    }

    return false;
  }

  /**
   * Renvoie l'ensemble des erreurs associées au non respect des contraintes
   * spécifiées dans le modèle.
   *
   * @returns {{}}
   */
  getErrors() {
    let errors = {};

    for(let key of Object.keys(this._fields)) {
      if(this._fields[key].hasErrors()) {
        errors[key] = this._fields[key].getErrors();
      }
    }

    return errors;
  }

  /**
   * Renvoie le message d'erreur associé à l'attribut de nom `fieldName`
   * dans le cas où cet attribut ne respecte pas la contrainte spécifiée
   * dans le modèle.
   *
   * @param fieldName
   * @returns {{}}
   */
  getError(fieldName) {
    if(this._fields[fieldName].hasErrors())
      errors[fieldName] = this._fields[fieldName].getErrors();
    else
      return {};
  }

}

export default Model;
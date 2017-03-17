/**
 * Base model class
 * @class
 */
class BaseModel {
  /**
   * @constructs
   * @param {Object} attributes entity attributes
   */
  constructor (attributes) {
    const sanitizedAttributes = this._sanitize(attributes);

    this._attributes = sanitizedAttributes;
  }

  get (key) {
    return this._attributes[key];
  }

  set (key, value) {
    this._attributes[key] = value;
  }

  toObject () {
    return Object.assign({}, this._attributes);
  }

  toJson () {
    return JSON.stringify(this.toObject());
  }

  /**
   * Returns sanitized attributes
   * @private 
   * @param {Object} attributes raw attributes
   * @return {Object} sanitized attributes
   */
  _sanitize (attributes) {
    return Object.assign({}, this._modelScheme, attributes);
  }

  /**
   * @abstract
   */
  get _modelScheme () {
    return {};
  }  
}

export { BaseModel }

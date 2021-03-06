/**
 * Abstract data access object generator
 * @abstract 
 * @class
 */
class AbstractDAOCreator {
  /**
   * @constructs
   */
  constructor (config) {
    this.Entity = config.Entity;
    this.Collection = config.Collection;
  }
  
  findAll () { 
    return this._onFindAll()
      .then((rawData) => 
        rawData.map((item) => new this.Entity(item)));  
  }

  findBy (params) {
    return 
      this._onFindBy(params)
      .then((rawData) => 
        rawData.map((item) => new this.Entity(item)));
  }

  findById (id) {
    return
      this._onFindById(id)
      .then((rawData) => 
        new this.Entity(rawData));
  }

  findOneBy (params) {
    return
      this._onFindById(params)
      .then((rawData) => 
        new this.Entity(rawData));
  }

  save (object) {
    if (!(object instanceof this.Entity )) {
      const error = 
        `Entity has incorrect type. "${this.Entity.name}" expected`;
      throw new Error(error);
    }

    return
      this._onSave(object)
      .then((id) => 
        object.set('id', id));
  }

  remove (object) {
    if (!(object instanceof this.Entity )) {
      const error = 
        `Entity has incorrect type. "${this.Entity.name}" expected`;
      throw new Error(error);
    }

    return
      this._onRemove(object)
  }

  /* abstract methods */

  /**
   * On find all function
   * @abstract 
   * @returns {promise} 
   */
  _onFindAll () { return Promise.resolve() }

  /**
   * On find by function
   * @abstract 
   * @param {Object} params query params
   * @returns {promise} 
   */
  _onFindBy (params) { return Promise.resolve() }

  /**
   * On find by id function
   * @abstract
   * @param {number|string} id entity id
   * @returns {promise} 
   */
  _onFindById (id) { return Promise.resolve() }

  /**
   * On find one by function
   * @abstract
   * @param {Object} params query params 
   * @returns {promise} 
   */
  _onFindOneBy (params) { return Promise.resolve() }

  /**
   * On save function
   * @abstract 
   * @param {Object} object entity object
   * @returns {promise} 
   */
  _onSave (object) { return Promise.resolve() }

  /**
   * On remove function
   * @abstract 
   * @param {Object} object entity object
   * @returns {promise} 
   */
  _onRemove (object) { return Promise.resolve() }

  static createDao () {}
}

export { AbstractDAOCreator }

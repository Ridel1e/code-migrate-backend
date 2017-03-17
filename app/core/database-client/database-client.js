/**
 * Abstract connection class
 * @abstract 
 * @class
 */
class DBClient {

  /**
   * @constructs
   */
  constructor () {
    this._connection = null;
  }

  /**
   * connection public getter
   * @public 
   */
  get conntection () { 
    return this._connection; 
  }

  /**
   * async operation.
   * connect to db by config
   * @public 
   * @param {Object} config
   * @returns {Promise} connection promise
   */
  connect (config) {
    return this
      ._onConnect(config)
      .then((connection) => this._connection = connection)
  }

  /**
   * sync operation.
   * close connection
   * @public 
   */
  close () {
    _onClose();
    this._connection = null;
  }

  /**
   * @abstract
   * @protected 
   * @param {Object} config db config
   */
  _onConnect (config) {}

  /**
   * @abstract 
   * @protected
   */
  _onClose () {}
}

export { DBClient }

import { DBClient } from './database-client';
import {MongoClient} from 'mongodb';

class MongoDBClient extends DBClient {
  /**
   * @protected  
   * @override 
   * @param {Object} config 
   */
  _onConnect (config) {
    const url = 
      `mongodb://${config.ip}:${config.port}/${config.name}`;

    return MongoClient.connect(url);
  }

  /**
   * @protected 
   * @override 
   */
  _onClose () {
    this._connection.close();
  }
}

const instance = new MongoDBClient();
export { instance as MongoDBClient }

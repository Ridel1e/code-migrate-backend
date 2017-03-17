import { AbstractDAO } from './abstract-dao';
import { MongoDBClient } from '../database-client';

class MongoDBDAO extends AbstractDAO {

  /**
   * @override
   * @protected 
   */
  _onFindAll () {
    console.log(this.Collection);
    return MongoDBClient
      .conntection
      .collection(this.Collection)
      .find()
      .toArray();
  }
}

export { MongoDBDAO }

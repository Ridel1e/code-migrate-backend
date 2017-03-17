import { AbstractDAOCreator } from './abstract-dao-creator';
import { MongoDBClient } from '../database-client';

class MongoDBDAOCreator extends AbstractDAOCreator {
  /**
   * @override
   * @protected 
   */
  _onFindAll () {
    return MongoDBClient
      .conntection
      .collection(this.Collection)
      .find()
      .toArray();
  }

  static createDao (config) {
    return new MongoDBDAOCreator(config);
  }
}

export { MongoDBDAOCreator }

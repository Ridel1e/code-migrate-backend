import { MongoDBDAO } from '../core';
import { Module } from './modules-model';

class ModuleDao extends MongoDBDAO {
    get Entity () {
      return Module;
    }

    get Collection () {
      return 'moduleCollection';
    }
}

const instance = new ModuleDao();
export { instance as ModuleDao }

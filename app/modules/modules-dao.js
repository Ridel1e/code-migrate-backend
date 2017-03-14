import {AbstractDAO} from '../core';
import {Module} from './modules-model';

class ModulesDao extends AbstractDAO {
    get Entity () {
      return Module;
    }
}

const instance = new ModulesDao();
export { instance as ModulesDao }

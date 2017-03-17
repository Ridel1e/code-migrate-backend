import {AbstractDAO} from '../core';
import {Module} from './modules-model';

class ModuleDao extends AbstractDAO {
    get Entity () {
      return Module;
    }
}

const instance = new ModuleDao();
export { instance as ModuleDao }

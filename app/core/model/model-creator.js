import { BaseModel } from './base-model';

const ModelCreator = (() => {
  return {
    createModel
  }

  function createModel (name, config) {
    class Entity extends BaseModel {
      static get Scheme () {
        return config.scheme
      }

      static get name () {
        return name;
      }

      static get idAttribute () {
        return config.idAttribute || 'id';
      }
    };
    
    return Entity;
  }
})();


export { ModelCreator }

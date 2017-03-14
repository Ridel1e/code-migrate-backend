import { BaseModel } from '../core';
import { scheme } from './modules-scheme';


class Module extends BaseModel {

  
  get _modelScheme () {
    return scheme;
  }
}

export { Module }

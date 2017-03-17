import { MongoDBDAOCreator } from '../core';
import { Module } from './modules-model';

const ModuleDao = MongoDBDAOCreator.createDao({
  Entity: Module,
  Collection: 'moduleCollection'
});

export { ModuleDao }

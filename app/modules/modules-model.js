import { ModelCreator } from '../core';
import { scheme } from './modules-scheme';

const Module = ModelCreator.createModel('Module', {
  name: 'Module',
  scheme: scheme
});

export { Module }

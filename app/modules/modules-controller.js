import express from 'express';

import { Module } from './modules-model';
import { ModuleDao } from './modules-dao';

const router = express.Router();

/* handlers */
router.get('/', (req, res) => {
  ModuleDao
    .findAll()
    .then();
  
  res.send('hello world');
});

export { router as ModulesController }

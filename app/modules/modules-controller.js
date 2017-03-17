import express from 'express';

import { Module } from './modules-model';
import { ModuleDao } from './modules-dao';
import { Serializer } from '../core';

const router = express.Router();

/* handlers */
router.get('/', (req, res) => {
  ModuleDao
    .findAll()
    .then((modules) => {
      res.json(Serializer.serialize(modules));
    });
});

export { router as ModulesController }

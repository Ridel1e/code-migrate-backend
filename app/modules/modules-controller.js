import express from 'express';
import { Module } from './modules-model';
import { ModulesDao } from './modules-dao';

const router = express.Router();

/* handlers */
router.get('/', (req, res) => {
   res.send('hello world');
});

export { router as ModulesController }

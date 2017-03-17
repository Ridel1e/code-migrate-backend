import express from 'express';

/* libs */

/* custom modules */
import { Routes } from './app-routes';
import { MongoDBClient } from './core';
import { config } from './config';

const app = express();
MongoDBClient.connect(config.database);

/* app usages */
app.use(Routes);

export { app }


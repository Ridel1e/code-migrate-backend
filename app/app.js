import express from 'express';

/* libs */

/* custom modules */
import { Routes } from './app-routes';
import { MongoDBClient } from './core';
import { config } from './config';

/* initialize app */
const app = express();
/* connect to database */
MongoDBClient.connect(config.database);

/* app usages */
app.use(Routes);

export { app }


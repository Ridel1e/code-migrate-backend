import express from 'express';

/* libs */

/* custom modules */
import {Routes} from './app-routes';

const app = express();

/* app usages */
app.use(Routes);

export { app }


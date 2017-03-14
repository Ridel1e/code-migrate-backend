import express from 'express';

/* controllers */
import { ModulesController } from './modules';


const router = express.Router();

/* routes - controllers map  */
router.use('/modules', ModulesController);

export {router as Routes }

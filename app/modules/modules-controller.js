import express from 'express';

const router = express.Router();

/* handlers */
router.get('/', (req, res) => {
   res.send('hello world');
});

export { router as ModulesController }

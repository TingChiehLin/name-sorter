import express from 'express';

const router = express.Router();

router.get('/', (req:express.Request, res:express.Response, next: express.NextFunction):void => {
    res.status(200).send('The Web is running');
})

export default router;

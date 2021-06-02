import express, {Request, Response, NextFunction} from 'express';
import router from './routes/index';

import handleFile from "./utilities/handleFile";

const app = express();
const port = 3006;

app.use('/',router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
});

app.use((req:express.Request, res:express.Response, next:NextFunction) => {
    res.status(404).send("404 Page not found!");
})

handleFile()

app.listen(port, () => {
    console.log(`Server is running. Port is ${port}`)
});


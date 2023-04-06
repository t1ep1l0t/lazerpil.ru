import express from 'express';
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import * as path from "path";
import router from "./routers/index.js";
import fileUpload from 'express-fileupload';
import history from 'connect-history-api-fallback';

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload({}));
app.use('/api', router);
app.use('/', express.static(path.resolve('../client/dist')));
app.use('/pictures', express.static(path.resolve('../client/pictures')));
// app.use(history({index: '/index.html'}));




const startServer = async () => {
    try {
        await mongoose.connect(process.env.BD_URL);
        app.listen(process.env.PORT, () => console.log(`Server started on port: ${process.env.PORT}`));
    } catch (e) {
        console.log(e)
    }
};

startServer();
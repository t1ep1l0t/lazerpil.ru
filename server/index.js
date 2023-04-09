import express from 'express';
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import * as path from "path";
import router from "./routers/index.js";
import fileUpload from 'express-fileupload';
import history from 'connect-history-api-fallback';
import bodyParser from "body-parser";
import multer from 'multer'
const upload = multer()

const app = express();
app.use(express.json());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(upload.array())
app.use(cors());
app.use(fileUpload({}));
app.use('/api', router);
app.use(history({index: '/index.html'}));
app.use('/', express.static(path.resolve('../client/dist')));
app.use('/pictures', express.static(path.resolve('../client/pictures')));



const startServer = async () => {
    try {
        await mongoose.connect(process.env.BD_URL);
        app.listen(process.env.PORT, () => console.log(`Server started on port: ${process.env.PORT}`));
    } catch (e) {
        console.log(e)
    }
};

startServer();
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from 'express';
import cors from  'cors';
import bodyParser from 'body-parser';
import Logger from './utils/logger';
import { AppDataSource } from './data-source';
import mainRouter from './routes/mainRouter';


const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200
}


const app = express();

//app.set('view engine', 'ejs')
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(mainRouter)

const PORT = process.env.PORT;

AppDataSource.initialize().then(()=> {
    app.listen(PORT , () => {
        Logger.log("server started at port: " + PORT);
    })
})

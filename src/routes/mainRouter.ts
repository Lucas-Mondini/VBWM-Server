
import Injector from '../injector';
import Express from 'express'
import ItemRouter from './item/index';
import Logger from '../utils/logger';

const mainRouter = Express();
mainRouter.use("/item", new ItemRouter(Injector.Item()).getRouter())
mainRouter.get("/", (req, res) => {
    res.status(200).json({
        "Success": true,
        "Version": "0.1",
        "Virtual": "Borders"
    })
})

mainRouter.get("/teste", (req, res) => {
    Logger.log("chegou aqui");
    res.status(200).json({
        "Success": true,
        "Version": "0.1",
        "Virtual": "Borders"
    })
})

export default mainRouter;
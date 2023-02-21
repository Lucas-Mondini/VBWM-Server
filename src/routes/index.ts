import Express  from "express";
import IController from "../controller/interface";
import Logger from "../utils/logger";
import IRouter from "./interface";

class Router implements IRouter {
    private className: string;
    private router : Express.Express;
    private controller : IController;
    
    constructor(controller : IController, className: string) {
        this.className = className;
        this.router = Express();
        this.controller = controller;
        if(this.controller) {
            this.get(this.controller, "/:id/");
            this.create(this.controller, "/");
            this.index(this.controller, "/");
            this.update(this.controller, "/:id/");
            this.delete(this.controller, "/:id/");
        } else {
            Logger.log("No controller found on " + this.className)
        }
    }
    

    public getRouter = () : Express.Express => {
     return this.router;
    }

    public use = (route : IRouter, path : string) => {
        this.router.use(path, route.getRouter());
    }

    public get =  (controller : IController, path : string) => {
        this.router.get(path, controller.get);
    }

    public index =  (controller : IController, path : string) => {
        this.router.get(path, controller.index);
    }

    public create =  (controller : IController, path : string) => {
        this.router.post(path, controller.create);
    }

    public update =  (controller : IController, path : string) => {
        this.router.put(path, controller.update);
    }

    public delete =  (controller : IController, path : string) => {
        this.router.delete(path, controller.destroy);
    }

};
export default Router
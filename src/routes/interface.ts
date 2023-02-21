import Express from 'express'
import IController from '../controller/interface'

export default interface IRouter {
    getRouter () : Express.Express;
    use (route :IRouter, path : string) : void;
    get (controller : IController, path : string) : void;
    index (controller : IController, path : string) : void;
    create (controller : IController, path : string) : void;
    update (controller : IController, path : string) : void;
    delete (controller : IController, path : string) : void;
}
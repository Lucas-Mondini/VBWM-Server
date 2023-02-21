import { Request, Response } from "express";
import IService from "../services/interface";
import IController from "./interface";

export default class Controller implements IController {

    protected service: IService;

    constructor(service: IService) {
        this.service = service;
    }
    create = async (req: Request, res: Response): Promise<Object> => {
        const ret = await this.service.create(req.body);
        return res.status(ret.status).json(ret.data);
    }
    get = async (req: Request, res: Response): Promise<Object> => {
        const ret = await this.service.get(Number(req.params.id));
        return res.status(ret.status).json(ret.data);
    }
    index = async (req: Request, res: Response): Promise<Object> => {
        const ret = await this.service.index();
        return res.status(ret.status).json(ret.data);
    }
    update = async (req: Request, res: Response): Promise<Object> => {
        const ret = await this.service.update(Number(req.params.id), req.body);
        return res.status(ret.status).json(ret.data);
    }
    destroy = async (req: Request, res: Response): Promise<Object> => {
        const ret = await this.service.destroy(Number(req.params.id));
        return res.status(ret.status).json(ret.data);
    }

}
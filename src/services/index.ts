import IRepository from "../repositories/interface";
import StatusData from "../types/statusData";
import IService from "./interface";


export default class Service implements IService {

    protected repository: IRepository;

    constructor(repository: IRepository) {
        this.repository = repository;
    }

    create = async (data: Object): Promise<StatusData> => {
        return await this.HandleRepository(async ()=>{
            return await this.repository.create(data)
        });
    }
    get = async (id: number): Promise<StatusData> => {
        return await this.HandleRepository(async ()=>{
            return await this.repository.get(id)
        });
    }
    index = async (): Promise<StatusData> => {
        return await this.HandleRepository(async () => {
            return await this.repository.index();
        });
    }
    update = async (id: number, data: Object): Promise<StatusData> => {
        return await this.HandleRepository(async ()=>{
            return await this.repository.update(id, data)
        });
    }
    destroy = async (id: number): Promise<StatusData> => {
        return await this.HandleRepository(async ()=>{
        return await this.repository.destroy(id);
        });
    }

    private async HandleRepository(func: Function) : Promise<StatusData> {
        try {
            const ret = await func()
            return {
                status: 200,
                data: ret
            }
        } catch(e) {
            return {
                status: 500,
                data: {
                    Error: "Unhandled Error",
                    details: e.message
                }
            }
        }
    }

}
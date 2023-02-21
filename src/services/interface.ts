import IRepository from "../repositories/interface";
import StatusData from "../types/statusData";

interface IService {
        create  (data: Object): Promise<StatusData>;
        get     (id: number): Promise<StatusData>;
        index   (): Promise<StatusData>;
        update  (id: number, data: Object): Promise<StatusData>;
        destroy (id: number): Promise<StatusData>;
}

export default IService

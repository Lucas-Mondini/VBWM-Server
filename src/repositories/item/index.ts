import { EntityTarget } from "typeorm";
import {Item, ItemData} from "../../model/item/index";
import Repository from "../index";
import ITransformRepository from "../transform/index";
import IItemRepository from "./interface";


export default class ItemRepository extends Repository implements IItemRepository {
    transformRepository: ITransformRepository
    constructor(model: EntityTarget<Item>, transformRepository: ITransformRepository) {
        super(model);
        this.relations = [
            "transform", 
            "transform.Position",
            "transform.Rotation",
            "transform.Scale"]
        this.transformRepository = transformRepository
    }

    create = async (data: any): Promise<Object> => {
        data = {
            name: data.name,
            amount: data.amount,
            transform: await this.transformRepository.create(data.transform)
        }


        return super.create(data);
    }
    update = async (id:number, data: any): Promise<Object> => {
        const item =  await this.repository.findOneOrFail({where: {id: id}, relations: this.relations}) as Item;
        data = {
            name: data.name,
            amount: data.amount,
            transform: await this.transformRepository.update(item.transform.id, data.transform)
        }
        
        return super.update(id, data);
    }
}
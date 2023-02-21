import { EntityTarget } from 'typeorm';
import { AppDataSource } from '../data-source';
import Model from '../model/index';
import IRepository from './interface'

import { Repository as typeormRepository } from 'typeorm'

export default class Repository implements IRepository {
    protected repository : typeormRepository<Model>;
    protected relations : Array<string>
    constructor(model: EntityTarget<Model>) {
        this.repository = AppDataSource.getRepository(model);
    }
    async create  (data: any): Promise<Object>  {
        return await this.repository.save(this.repository.create(data))
    }

    async get  (id: number): Promise<Object> {
        return await this.repository.findOneOrFail({where: {id: id}, relations: this.relations});
    }
    async index  (): Promise<Object> {
        const model = await this.repository.find({relations: this.relations});
        return model;
    }
    async update  (id:number, data: any): Promise<Object> {
        await this.repository.update({id: id}, data);
        return this.get(id);
    }
    async destroy  (id: number): Promise<Object> {
        const obj =  await this.repository.findOneByOrFail({id: id});
        const dead = await this.repository.delete(obj.id);
        
        if(!dead.affected)  {
            throw "unhandled error"
        }
        return {
            Message: "deletion successfull"
        }
    }
}
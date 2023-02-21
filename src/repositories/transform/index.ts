import { EntityTarget } from "typeorm";
import { Transform } from "../../model/transform/index";
import { Vector } from "../../model/vector/index";
import Repository from "../index";
import IVectorRepository from "../vector/interface";
import ITransformRepository from "./interface";


export default class TransformRepository extends Repository implements ITransformRepository {
    vectorRepository: IVectorRepository;
    constructor(model: EntityTarget<Transform>, vectorRepository: IVectorRepository) {
        super(model);
        this.relations = ["Position", "Rotation", "Scale"]
        this.vectorRepository = vectorRepository;
    }

    async create (data: any): Promise<Object> {
        [
            data.Position,
            data.Rotation,
            data.Scale
        ] = await Promise.all(
            [
                this.vectorRepository.create(data.Position),
                this.vectorRepository.create(data.Rotation),
                this.vectorRepository.create(data.Scale)])


        return super.create(data);
    }
    async update (id:number, data: any): Promise<Object> {
        const transform = await this.repository.findOneOrFail({where: {id: id}, relations: this.relations}) as Transform;
    [
        data.Position,
        data.Rotation,
        data.Scale
    ] = await Promise.all(
        [
            this.vectorRepository.update(transform.Position.id, data.Position),
            this.vectorRepository.update(transform.Rotation.id, data.Rotation),
            this.vectorRepository.update(transform.Scale.id, data.Scale)
        ])
        
        return super.update(id, data);
    }
}
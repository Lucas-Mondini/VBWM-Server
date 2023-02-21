import { EntityTarget } from "typeorm";
import { AppDataSource } from "../../data-source";

import { Vector } from "../../model/vector/index";
import Repository from "../index";
import IVectorRepository from "./interface";


export default class VectorRepository extends Repository implements IVectorRepository {
    constructor(model: EntityTarget<Vector>) {
        super(model);
    }
}
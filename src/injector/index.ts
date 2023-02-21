import ItemController from "../controller/item"
import {Item} from "../model/item"
import { Transform } from "../model/transform/index"
import { Vector } from "../model/vector/index"
import ItemRepository from "../repositories/item"
import TransformRepository from "../repositories/transform"
import VectorRepository from "../repositories/vector/index"
import ItemService from "../services/item"


export default class Injector {
    public static Item() : ItemController {
        return new ItemController(
            new ItemService(
                new ItemRepository(
                    Item, new TransformRepository(
                        Transform, new VectorRepository(
                            Vector
                        )
                    )
                )
            )
        )
    }
}
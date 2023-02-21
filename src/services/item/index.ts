import IItemRepository from "../../repositories/item/interface";
import Service from "../index";
import IItemService from "./interface";

export default class ItemService extends Service implements IItemService {
    constructor(itemRepository: IItemRepository) {
        super(itemRepository);
    }
}
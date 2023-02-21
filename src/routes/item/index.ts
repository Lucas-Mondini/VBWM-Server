import Router from "..";
import IItemController from "../../controller/item/interface";


export default class ItemRouter extends Router {
    constructor(controller: IItemController) {
        super(controller, "Item");
    }
}
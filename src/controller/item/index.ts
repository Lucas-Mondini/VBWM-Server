import IItemService from "../../services/item/interface";
import Controller from "../index";
import IItemController from "./interface";
import {Request, Respoonse} from 'express'

import Utils from "../../utils";
import { ItemData } from "../../model/item";
import Logger from "../../utils/logger";

export default class ItemController extends Controller implements IItemController {
    constructor(service: IItemService) {
        super(service)
    }    
}
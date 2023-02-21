import 'reflect-metadata'
import { DataSource } from "typeorm"

import 'dotenv/config';
import {Item} from './model/item/index';
import { Transform } from './model/transform/index';
import { Vector } from './model/vector/index';

const host = process.env.DATABASE_HOST;
const port = Number(process.env.DATABASE_PORT);
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_DATABASE;

export const AppDataSource = new DataSource({
    type:   'postgres',
    host:   host,
    port:   port,
    username:   username,
    password:   password,
    database:   database,
    synchronize:    true,
    logging:        false,
    entities: [
        Item,
        Transform,
        Vector
    ],
    subscribers: [],
    migrations: [],
});
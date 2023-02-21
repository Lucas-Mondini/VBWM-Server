import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "../index";

type VectorData = {
    X: number
    Y: number
    Z: number
}

@Entity()
class Vector extends Model {
    @Column()
    X: number;
    @Column()
    Y: number;
    @Column()
    Z: number;
}
export {
    VectorData,
    Vector
} 
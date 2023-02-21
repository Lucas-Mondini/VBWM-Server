import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "../index";
import { Vector, VectorData } from "../vector/index";

type TransformData = {
    Position:   VectorData
    Rotation:   VectorData
    Scale:      VectorData
}

@Entity()
class Transform extends Model {
    @OneToOne(()=> Vector, {onDelete: 'CASCADE', nullable: false})
    @JoinColumn({referencedColumnName: "id"})
    Position: Vector
    @OneToOne(()=> Vector, {onDelete: 'CASCADE', nullable: false})
    @JoinColumn({referencedColumnName: "id"})
    Rotation: Vector
    @OneToOne(()=> Vector, {onDelete: 'CASCADE', nullable: false})
    @JoinColumn({referencedColumnName: "id"})
    Scale: Vector
}
export {
    TransformData,
    Transform
} 
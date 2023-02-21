import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "../index";
import { Transform } from "../transform/index";

type ItemData = {
    name: string
    transform: Transform
}

@Entity()
class Item extends Model {
    @Column()
    name: string;

    @Column({nullable: false, type: 'bigint' })
    ammount: number = 1

    @OneToOne(()=> Transform, {onDelete: 'CASCADE', nullable: false})
    @JoinColumn({referencedColumnName: "id"})
    transform: Transform
}
export {
    ItemData,
    Item
} 
import { Cars } from './../cars/cars.model';
import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { OneToMany } from 'typeorm/decorator/relations/OneToMany';
import { type } from 'os';
import { ManyToOne } from 'typeorm';


interface ColorCreationAttr {
  name: string
}

@Table({
  tableName: 'colors'
})
export class Colors extends Model<Colors, ColorCreationAttr>{

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  })
  id: number;


  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @ManyToOne(() => Cars, (car) => car.color)
  car: Cars


}
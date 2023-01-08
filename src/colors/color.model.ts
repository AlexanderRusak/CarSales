import { Cars } from './../cars/cars.model';
import { Model, Table, Column, DataType, HasOne } from 'sequelize-typescript';

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

  @HasOne(() => Cars, "colorId")
  car: Cars
}
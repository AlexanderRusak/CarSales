import { Cars } from './../cars/cars.model';
import { Model, Table, Column, DataType, HasOne } from 'sequelize-typescript';

interface ColorCreationAttr {
  name: string;
  hex: string;
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

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  hex: string;

  @HasOne(() => Cars, "colorId")
  car: Cars
}
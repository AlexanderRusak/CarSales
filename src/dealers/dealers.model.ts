import { CarDealers } from './../car-dealers/car-dealers.model';
import { Model, Table, Column, DataType, HasOne } from 'sequelize-typescript';


interface DealerCreationAttr {
  name: string;
  phone: string;
}

@Table({
  tableName: 'dealers'
})
export class Dealers extends Model<Model, DealerCreationAttr> {

  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string

  @HasOne(() => CarDealers, 'dealerId')
  carDealer: CarDealers

}
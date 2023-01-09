import { Dealers } from './../dealers/dealers.model';
import { Cars } from 'src/cars/cars.model';
import { Column, Model, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';


interface CreateCarDealersAttr {
  price: number
}

@Table({
  tableName: 'car-dealers'
})
export class CarDealers extends Model<CarDealers, CreateCarDealersAttr>{

  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  price: number;


  @ForeignKey(() => Cars)
  carId: number;
  @BelongsTo(() => Cars)
  car: Cars;

  @ForeignKey(() => Dealers)
  dealerId: number;
  @BelongsTo(() => Dealers)
  dealer: Dealers

}
import { CarDealers } from './../car-dealers/car-dealers.model';
import { Colors } from './../colors/color.model';
import { Brands } from './../brands/brands.model';
import { Model, Table, Column, DataType, BelongsTo, ForeignKey, HasOne, } from 'sequelize-typescript';
interface CreateCarsAttr {
  model: string,
  brand: Brands,
  color: Colors
}

@Table({
  tableName: 'cars'
})
export class Cars extends Model<Cars, CreateCarsAttr>{

  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  model: string;

  @ForeignKey(() => Brands)
  brandId: number;

  @ForeignKey(() => Colors)
  colorId: number

  @BelongsTo(() => Brands)
  brand: Brands

  @BelongsTo(() => Colors)
  color: Colors

  @HasOne(() => CarDealers, 'carId')
  carDealer: CarDealers

}
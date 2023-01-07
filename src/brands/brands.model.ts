import { ApiProperty } from '@nestjs/swagger/dist';
import { Model, DataType, Table, Column } from 'sequelize-typescript';
import { Cars } from 'src/cars/cars.model';
import { ManyToOne } from 'typeorm';


interface BrandCreationsAttr {
  name: string
}

@Table({
  tableName: 'brands'
})
export class Brands extends Model<Brands, BrandCreationsAttr>{

  @ApiProperty({
    example: 1, description: 'Unique ID'
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;


  @ApiProperty({
    example: 'KIA', description: 'Car brand'
  })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string;


  @ManyToOne(() => Cars, (car) => car.brand)
  car: Cars

}
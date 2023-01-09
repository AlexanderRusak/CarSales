import { CarDealers } from './car-dealers.model';
import { Dealers } from './../dealers/dealers.model';
import { Cars } from 'src/cars/cars.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarDealersService } from './car-dealers.service';
import { CarDealersController } from './car-dealers.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CarDealersController],
  providers: [CarDealersService],
  imports: [
    SequelizeModule.forFeature([Cars, Dealers, CarDealers])
  ]
})
export class CarDealersModule { }

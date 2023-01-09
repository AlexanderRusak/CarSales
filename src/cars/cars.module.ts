import { Brands } from './../brands/brands.model';
import { Colors } from './../colors/color.model';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Cars } from './cars.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CarDealers } from 'src/car-dealers/car-dealers.model';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  imports: [
    SequelizeModule.forFeature([Cars, Colors, Brands, CarDealers])
  ]
})
export class CarsModule { }

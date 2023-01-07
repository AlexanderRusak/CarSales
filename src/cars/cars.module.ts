import { Brands } from './../brands/brands.model';
import { Colors } from './../colors/color.model';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Cars } from './cars.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  imports: [
    SequelizeModule.forFeature([Cars, Colors, Brands])
  ]
})
export class CarsModule { }

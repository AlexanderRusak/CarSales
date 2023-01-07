import { Cars } from './../cars/cars.model';
import { Brands } from './brands.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  imports: [
    SequelizeModule.forFeature([
      Brands, Cars
    ])
  ]
})
export class BrandsModule { }

import { Brands } from 'src/brands/brands.model';
import { Colors } from './../colors/color.model';
import { CreateCarsDto } from './dto/create-cars-dto';
import { Cars } from './cars.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CarsService {

  constructor(@InjectModel(Cars) private carsRepository: typeof Cars) { }

  async createCar(dto: CreateCarsDto) {
    const car = await this.carsRepository.create(dto);
    return car;
  }

  async getAllCars() {
    const cars = await this.carsRepository.findAll({
      include: [Brands, Colors],
      attributes: {
        exclude: ['brandId', 'colorId']
      }
    });
    return cars;
  }

  async getCarsByBrandId(brandName: string) {
    const cars = await this.carsRepository.findAll({
      /*       raw: true, */
      include: [
        {
          model: Brands,
          attributes: {
            exclude: ["id", "createdAt", "updatedAt"],
          },
          where: {
            name: brandName
          }
        },
        {
          model: Colors,
          attributes: {
            exclude: ["id", "createdAt", "updatedAt"],
          },
        }],
      /*       attributes: {
              include: [
                [Sequelize.col('brand.name'), 'brand'],
                [Sequelize.col('brand.brandImageUrl'), 'brandImageUrl'],
                [Sequelize.col('color.name'), 'color'],
                [Sequelize.col('color.hex'), 'hex']],
              exclude: ['brandId', 'colorId', 'id', 'createdAt', 'updatedAt', 'brand.name', 'brand.brandImageUrl', 'color.name', 'color.hex'],
            }, */
      attributes: {
        exclude: ['brandId', 'colorId', 'id', 'createdAt', 'updatedAt'],
      },
    });


    return cars;
  }

}

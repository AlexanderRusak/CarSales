import { Brands } from 'src/brands/brands.model';
import { Colors } from './../colors/color.model';
import { CreateCarsDto } from './dto/create-cars-dto';
import { Cars } from './cars.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

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

}

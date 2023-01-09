import { Colors } from './../colors/color.model';
import { Brands } from 'src/brands/brands.model';
import { Dealers } from './../dealers/dealers.model';
import { Cars } from 'src/cars/cars.model';
import { CreateCarDealersDto } from './dto/create-car-dealer.dto';
import { CarDealers } from './car-dealers.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CarDealersService {

  constructor(@InjectModel(CarDealers) private carDealerRepostitory: typeof CarDealers) { }

  async createCarDealers(dto: CreateCarDealersDto) {
    const carDealer = await this.carDealerRepostitory.create(dto)
    return carDealer;
  }

  async getAllCarDealers() {
    return this.carDealerRepostitory.findAll({
      include: [{
        model: Dealers,
        attributes: {
          exclude: ['id', "createdAt", "updatedAt"]
        }
      },
      {
        model: Cars,
        include: [{
          model: Colors,
          attributes: {
            exclude: ['id', "createdAt", "updatedAt"]
          }
        }, {
          model: Brands,
          attributes: {
            exclude: ['id', "createdAt", "updatedAt"]
          }
        }],
        attributes: {
          exclude: ['brandId', 'colorId', 'id', "createdAt", "updatedAt"]
        }
      }],
      attributes: {
        exclude: ['carId', 'dealerId', 'id', "createdAt", "updatedAt"]
      }
    });
  }

}

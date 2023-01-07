import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Brands } from './brands.model';
import { CreateBrandDto } from './dto/create-brand-dto';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brands) private brandRepository: typeof Brands) { }

  async createBrand(dto: CreateBrandDto) {
    const brand = await this.brandRepository.create(dto);
    return brand
  }

  async getAllBrands() {
    const brands = await this.brandRepository.findAll();
    return brands;
  }
}

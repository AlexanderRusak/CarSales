import { CreateDealerDto } from './dto/create-dealer-dto';
import { Dealers } from './dealers.model';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DealersService {
  constructor(@InjectModel(Dealers) private dealerRepository: typeof Dealers) { }

  async createDealer(dto: CreateDealerDto) {
    const dealer = await this.dealerRepository.create(dto);
    return dealer;
  }

  async getAllDealers() {
    const dealers = await this.dealerRepository.findAll();
    return dealers;
  }

}

import { DealersService } from './dealers.service';
import { Controller } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common/decorators';
import { CreateDealerDto } from './dto/create-dealer-dto';

@Controller('dealers')
export class DealersController {

  constructor(private dealerService: DealersService) { }

  @Post()
  create(@Body() dealerDto: CreateDealerDto) {
    return this.dealerService.createDealer(dealerDto)
  }

  @Get()
  getAll() {
    return this.dealerService.getAllDealers();
  }

}

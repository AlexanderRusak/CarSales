import { CreateCarDealersDto } from './dto/create-car-dealer.dto';
import { CarDealersService } from './car-dealers.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('car-dealers')
export class CarDealersController {

  constructor(private carDealersService: CarDealersService) { }

  @Post()
  create(@Body() dto: CreateCarDealersDto) {
    return this.carDealersService.createCarDealers(dto)
  }

  @Get()
  getAll() {
    return this.carDealersService.getAllCarDealers();
  }
}

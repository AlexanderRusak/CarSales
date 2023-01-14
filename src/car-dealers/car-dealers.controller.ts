import { CreateCarDealersDto } from './dto/create-car-dealer.dto';
import { CarDealersService } from './car-dealers.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';


export interface DealerParams {
  dealerId: number;
  brandId: number;
  colorId: number;
}

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

  @Get('dealer-id=:dealerId&brand-id=:brandId&color-id=:colorId')
  getDealer(@Param() dealerParams: DealerParams) {
    return this.carDealersService.getAllCarsByDealerId(dealerParams);
  }
}

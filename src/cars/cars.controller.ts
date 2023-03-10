import { CreateCarsDto } from './dto/create-cars-dto';
import { CarsService } from './cars.service';
import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';

@Controller('cars')
export class CarsController {

  constructor(private carService: CarsService) { }

  @Post()
  create(@Body() carDto: CreateCarsDto) {
    return this.carService.createCar(carDto)
  }

  @Get()
  getAll() {
    return this.carService.getAllCars();
  }

  @Get('brandName=:brandName')
  getCarsByBrandId(@Param() { brandName }: { brandName: string }) {
    console.log(brandName);

    return this.carService.getCarsByBrandId(brandName)
  }

}

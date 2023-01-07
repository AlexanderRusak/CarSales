import { ColorsService } from './colors.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateColorDto } from './dto/create-color-dto';

@Controller('colors')
export class ColorsController {

  constructor(private colorService: ColorsService) { }

  @Post()
  create(@Body() colorDto: CreateColorDto) {
    return this.colorService.createColor(colorDto);
  }

  @Get()
  getAll() {
    return this.colorService.getAllColors();
  }

}

import { Brands } from './brands.model';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand-dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';

@ApiTags("Car brands")
@Controller('brands')
export class BrandsController {
  constructor(private brandService: BrandsService) { }

  @ApiOperation({
    summary: 'Create new brand'
  })
  @ApiResponse({
    status: 200,
    type: Brands
  })
  @Post()
  create(@Body() brandDto: CreateBrandDto) {
    return this.brandService.createBrand(brandDto)
  }


  @ApiOperation({
    summary: 'Get all brands'
  })
  @ApiResponse({
    status: 200,
    type: [Brands]
  })
  @Get()
  getAll() {
    return this.brandService.getAllBrands()
  }

}

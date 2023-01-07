import { Cars } from './../cars/cars.model';
import { ColorsController } from './colors.controller';
import { Module } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Colors } from './color.model';

@Module({
  controllers: [ColorsController],
  providers: [ColorsService],
  imports: [
    SequelizeModule.forFeature([
      Colors, Cars
    ])
  ]
})
export class ColorsModule { }

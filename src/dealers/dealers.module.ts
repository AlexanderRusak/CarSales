import { Dealers } from './dealers.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { DealersController } from './dealers.controller';
import { DealersService } from './dealers.service';

@Module({
  controllers: [DealersController],
  providers: [DealersService],
  imports: [
    SequelizeModule.forFeature([
      Dealers
    ])
  ]
})
export class DealersModule { }

import { Dealers } from './dealers/dealers.model';
import { ColorsModule } from './colors/colors.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BrandsModule } from './brands/brands.module';
import { ConfigModule } from '@nestjs/config';
import { Brands } from './brands/brands.model';
import { Colors } from './colors/color.model';
import { DealersModule } from './dealers/dealers.module';
import { CarsModule } from './cars/cars.module';
import { Cars } from './cars/cars.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Brands, Colors, Dealers, Cars],
      autoLoadModels: true
    }),
    BrandsModule,
    ColorsModule,
    DealersModule,
    CarsModule
  ]
})
export class AppModule { }
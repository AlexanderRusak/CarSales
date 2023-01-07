import { Colors } from './../../colors/color.model';
import { Brands } from 'src/brands/brands.model';

export class CreateCarsDto {
  model: string;
  brand: Brands;
  color: Colors
}
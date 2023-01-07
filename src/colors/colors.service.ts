import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Colors } from './color.model';
import { CreateColorDto } from './dto/create-color-dto';

@Injectable()
export class ColorsService {

  constructor(@InjectModel(Colors) private colorRepository: typeof Colors) { }

  async createColor(dto: CreateColorDto) {
    const color = await this.colorRepository.create(dto)
    return color;
  }

  async getAllColors() {
    const colors = await this.colorRepository.findAll();
    return colors;
  }

}

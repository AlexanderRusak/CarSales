import { ApiProperty } from '@nestjs/swagger';

export class CreateBrandDto {
  @ApiProperty({
    example: 'KIA', description: 'Car brand'
  })
  readonly name: string
}
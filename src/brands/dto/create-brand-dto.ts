import { ApiProperty } from '@nestjs/swagger';

export class CreateBrandDto {
  @ApiProperty({
    example: 'KIA', description: 'Car brand',
  })
  readonly name: string
  @ApiProperty({
    example: 'htpps://some_url', description: 'Brand logo url',
  })
  readonly brandImageUrl: string
}
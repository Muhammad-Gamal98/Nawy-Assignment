import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateApartmentDto {
  @IsString()
  @MaxLength(100)
  @MinLength(3)
  @ApiProperty()
  unitName: string;

  @IsNumber()
  @ApiProperty()
  unitNumber: number;

  @IsString()
  @MinLength(3)
  @MaxLength(1000)
  @ApiProperty()
  description: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @IsString()
  @ApiProperty()
  project: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, Min } from 'class-validator';

export class PaginationParams {
  @IsNumber()
  @Min(1)
  @IsOptional()
  @ApiProperty({ default: 1, required: false })
  page?: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  @ApiProperty({ default: 10, required: false })
  limit?: number;
}

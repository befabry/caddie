import { BaseItems } from '@caddie/common';
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateItemDto implements Partial<BaseItems> {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsOptional()
  @IsString()
  type: string;
}

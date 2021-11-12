import { IsNumber, IsPositive, IsString } from 'class-validator';
import { IItems } from '../items.interface';

export class CreateItemDto implements IItems {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  type: string;
}

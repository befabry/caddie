import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { IItems } from '../items.interface';

@Table
export class Item extends Model implements IItems {
  @AllowNull(false)
  @Column
  name: string;

  @Column(DataType.FLOAT)
  price: number;

  @Column
  type: string;
}

import { Id } from './id.interface';

export interface BaseItem extends Id {
  name: string;
  price: number;
  type: string;
}

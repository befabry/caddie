import { Id } from './id.interface';

export interface BaseItem extends Id {
  id: number;
  name: string;
  price: number;
  type: string;
}

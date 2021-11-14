import { Id } from './id.interface';

export interface BaseItems extends Id {
  name: string;
  price: number;
  type: string;
}

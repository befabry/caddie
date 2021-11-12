import { Id, Timestampable } from 'src/utils';

export interface IItems extends Id, Timestampable {
  name: string;
  price: number;
  type: string;
}

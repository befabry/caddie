import { AbstractHash } from 'src/global/abstract.hash';
import { IItems } from '../items.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseItem extends AbstractHash implements IItems {
  name: string;
  price: number;
  type: string;

  constructor(partial: Partial<IItems>) {
    super();
    Object.assign(this, partial);
  }
}

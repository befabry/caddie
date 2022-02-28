import { Inject, Injectable } from '@nestjs/common';
import HashId from 'hashids';

@Injectable()
export class HashIdHelper {
  constructor(@Inject('HASHID') private readonly hashId: HashId) {}

  decode(hashedId: string) {
    return this.hashId.decode(hashedId);
  }

  encode(id: number) {
    return this.hashId.encode(id);
  }
}

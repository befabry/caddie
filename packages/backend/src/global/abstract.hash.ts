import { HashIdHelper } from 'src/hash-id.helper';
import { Exclude, Expose } from 'class-transformer';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export abstract class AbstractHash {
  @Exclude()
  id: number;

  //@Inject('HASHID_HELPER')
  @Inject(HashIdHelper)
  public readonly hashIdHelper: HashIdHelper;

  @Expose({ name: 'id' })
  encodedId() {
    console.log(this.hashIdHelper);
    console.log(HashIdHelper);
    return this.hashIdHelper.encode(this.id);
  }
}

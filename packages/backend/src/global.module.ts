import { Module, Global, Provider } from '@nestjs/common';
import { HashIdHelper } from './hash-id.helper';
import { PrismaService } from './prisma.service';
import HashId from 'hashids';

const HashIdFactory: Provider = {
  provide: 'HASHID',
  useFactory: () => {
    return new HashId('salt', 10);
  },
};

const HashIdHelperFactory: Provider = {
  provide: 'HASHID_HELPER',
  useClass: HashIdHelper,
};

@Global()
@Module({
  providers: [PrismaService, HashIdFactory, HashIdHelperFactory, HashIdHelper],
  exports: [PrismaService, HashIdFactory, HashIdHelperFactory, HashIdHelper],
})
export class GlobalModule {}

import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalModule } from './global.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ItemsModule, GlobalModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      //Globally scoped pipe
      provide: APP_PIPE,
      useValue: new ValidationPipe({ whitelist: true }),
    },
  ],
})
export class AppModule {}

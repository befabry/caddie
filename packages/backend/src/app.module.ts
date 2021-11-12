import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize';
import { resolve } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Item } from './items/entities/item.entity';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      database: 'main',
      models: [Item],
      storage: 'db.sqlite',
      sync: { alter: true, force: true },
    }),
    ItemsModule,
  ],
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

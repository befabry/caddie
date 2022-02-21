import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

// TODO
// const isDev =

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    // TODO remove
    { cors: true },
  );

  app.setGlobalPrefix('api');

  //With Docker we can't listen to localhost, listen to "0.0.0.0"
  await app.listen(3001, '0.0.0.0');
}
bootstrap();

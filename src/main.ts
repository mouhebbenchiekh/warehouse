import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.REDIS,
    options: {
      url: process.env.REDIS_URL,
    },
  });
  await app.startAllMicroservices();
  await app.listen(process.env.PORT || 3000);
}

bootstrap().catch((error) => console.log(error));

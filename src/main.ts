import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';

mongoose.set('debug', Number(process.env.MONGODB_DEBUG) === 1);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  await app.listen(config.get('server.port'));
}
bootstrap();

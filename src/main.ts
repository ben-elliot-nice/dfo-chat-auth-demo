import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as dotenv from 'dotenv';

async function bootstrap() {
  // Ensure env vars are available for app
  dotenv.config();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Setup session middleware for passport
  app.use(
    session({
      secret: 'supersecretbatcavesecret',
      resave: false,
      saveUninitialized: false,
    }),
  );

  // Setup template renderer
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('pug');

  // Start app
  await app.listen(3000);
}
bootstrap();

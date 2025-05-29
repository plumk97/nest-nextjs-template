import "./alias"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FrontendService } from './frontend/frontend.service';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.get(FrontendService).prepare();

  const port = process.env.PORT ?? 3000
  await app.listen(port);
  Logger.log(
    `Server is running on: http://localhost:${port}`,
  );
}
bootstrap();

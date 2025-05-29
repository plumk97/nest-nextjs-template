import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrontendModule } from './frontend/frontend.module';
import { AppMiddleware } from './app.middleware';

@Module({
  imports: [FrontendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes('/');
  }
}

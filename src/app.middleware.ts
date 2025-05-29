import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { FrontendService } from './frontend/frontend.service';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  constructor(private readonly frontend: FrontendService) { }

  public use(req: Request, res: Response, next: () => void) {
    const url = req.url;
    if (!url) {
      res.statusCode = 404;
      return;
    }

    if (url.startsWith('/api')) {
      next();
    } else {
      this.frontend.handle(req, res);
    }
  }
}

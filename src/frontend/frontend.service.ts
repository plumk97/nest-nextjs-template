import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import next from 'next';
import { NextServer } from 'next/dist/server/next';

@Injectable()
export class FrontendService {
    private app!: NextServer;

    async prepare(): Promise<void> {
        const app = next({
            dev: process.env.NODE_ENV !== 'production',
            customServer: true,
            turbopack: process.env.NODE_ENV !== 'production',
        });

        await app.prepare();
        this.app = app as NextServer;
    }

    async handle(req: Request, res: Response) {
        const handle = this.app.getRequestHandler();
        handle(req, res)
    }
}

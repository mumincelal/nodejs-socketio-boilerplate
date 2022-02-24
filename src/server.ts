import { Request, Response } from 'express';
import { app } from './app';
import { env } from './configs/env';
import { httpServer } from './http-server';
import { sockets } from './sockets';

const PORT = env.APP_PORT;

app.get('/health', (req: Request, res: Response) => {
  res.json({ message: 'Server is up' });
});

sockets.bootstrap();

httpServer.listen(PORT, () => {
  console.log(`Server started on ${PORT}...`);
});

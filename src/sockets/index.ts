import jwt from 'jsonwebtoken';
import { Server, ServerOptions, Socket } from 'socket.io';
import { ExtendedError } from 'socket.io/dist/namespace';
import { env, logger } from '../configs';
import { httpServer } from '../http';
import { sender } from './sender.socket';
import { receiver } from './receiver.socket';

export interface ExtendedSocket extends Socket {
  context: any;
}

const options: Partial<ServerOptions> = {
  cors: {
    origin: '*'
  }
};

const io = new Server(httpServer, options);

io.use((socket: Socket, next: (error?: ExtendedError) => void) => {
  const { authorization } = socket.handshake.headers;

  if (authorization) {
    const token = authorization.replace('Bearer ', '');

    jwt.verify(token, env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return next(new Error(err.message));
      }

      const extendedSocket = socket as ExtendedSocket;
      extendedSocket.context = decoded;
      return next();
    });

    return next();
  }

  return next(new Error('Not Authorized'));
});

io.on('connection', (socket: Socket) => {
  logger.info(`Connected: ${socket.id}`);

  sender(socket);
  receiver(socket);

  socket.on('disconnect', (reason) => logger.info(reason));
});

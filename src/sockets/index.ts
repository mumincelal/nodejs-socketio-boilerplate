import { Server, ServerOptions, Socket } from 'socket.io';
import { httpServer } from '../http-server';
import { eventSender } from './event-sender.socket';
import { eventReceiver } from './event-receiver.socket';
import { InternalServerEvents, ReceivingEvents, SendingEvents, SocketData } from '../interfaces';

const disconnectSocket = (reason: unknown): void => {
  console.log(reason);
};

const connectSocket = (socket: Socket): void => {
  console.log(`${socket.id} connected`);

  eventSender.initialize();
  eventReceiver.initialize(socket);

  socket.on('disconnect', disconnectSocket);
};

const bootstrap = (): void => {
  const options: Partial<ServerOptions> = {
    cors: {
      origin: '*'
    }
  };

  const io = new Server<ReceivingEvents, SendingEvents, InternalServerEvents, SocketData>(httpServer, options);

  io.on('connection', connectSocket);
};

export const sockets = {
  bootstrap
};

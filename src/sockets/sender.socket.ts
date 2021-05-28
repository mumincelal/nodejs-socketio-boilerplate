import { Socket } from 'socket.io';

export const sender = (socket: Socket): void => {
  socket.emit('pong');
};

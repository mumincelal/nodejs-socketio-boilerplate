import { Socket } from 'socket.io';

const initialize = (socket: Socket): void => {
  console.log('Event Receiver initialized...');
};

export const eventReceiver = { initialize };

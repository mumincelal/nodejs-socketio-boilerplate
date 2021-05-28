import { Socket } from 'socket.io';
import { logger } from '../configs';
import { authService } from '../services';

export const receiver = (socket: Socket): void => {
  socket.on('ping', () => logger.info('ping'));
  socket.on('login', () => {
    const result = authService.login();
  });
};

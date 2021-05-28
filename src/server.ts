import { env, logger } from './configs';
import { httpServer } from './http';
import './sockets';

const port = env.PORT;

httpServer.listen(port, () => {
  logger.info(`Server started on ${port}`);
});

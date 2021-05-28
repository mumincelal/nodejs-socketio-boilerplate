import { Server, Socket } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';
import { app } from './app';
import { env } from './configs';

const port = env.PORT;
const server = createServer(app);
const io = new Server(server);

app.use(cors());

io.on('connection', (socket: Socket) => {
    console.table(socket);
});

server.listen(port, () => {
    console.log('Server started on', port);
});

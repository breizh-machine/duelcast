import Promise from 'bluebird';
import mongoose from 'mongoose';
import config from './config/env';
import app from './config/express';
import SocketServer from './server/socketServer'
import http from 'http'

// promisify mongoose
Promise.promisifyAll(mongoose);

// connect to mongo db
mongoose.connect(config.db, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});

const debug = require('debug')('express-mongoose-es6-rest-api:index');

//Launch socket server
var server = http.Server(app);
var io = require('socket.io')(server);
server.listen(3002);
const socketServer = new SocketServer(io);
socketServer.run();

// listen on port config.port
app.listen(config.port, () => {
  debug(`server started on port ${config.port} (${config.env})`);
});

//Use jade as template engine
app.set('views', './server/views')
app.set('view engine', 'jade')


export default app;

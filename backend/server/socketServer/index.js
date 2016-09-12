import io from 'socket.io'

var socketServer = {}

class SocketServer {
	constructor(server) {
		this.server = server;
		this.clients = {};
	}

	run() {
		console.log('Running socket server !')
		this.server.on('connection', function (socket) {
			console.log(`Client ${socket.id} connected`);
			this.clients[socket.id] = socket
			socket.on('ping2', function() {
				socket.emit('pong2');
			});
			socket.emit('connection-confirmation', {gameId: 1, clientId: socket.id});
			socket.on(`client-${socket.id}`, function() {
				socket.emit('lobby-1', 'Welcome2');
			})

			socket.on('launch-rocket', function() {
				console.log('launching rocket')
				var position = {x: 300, y: 0};
				var loop = setInterval(function() {
					position.y += 10;
					socket.emit('display-item', position);
					if (position.y > 600) {
						clearInterval(loop);
					}
				}, 10);

			});

		});

	}

}

export default SocketServer
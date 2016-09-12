import UUID from 'uuid-js';

class listener {
	constructor(notificationHandler) {
		this.id = UUID.create().toString();
		this.notificationHandler = notificationHandler;
	}

	notify(message) {
		this.notificationHandler(message);
	}

}

export default listener;
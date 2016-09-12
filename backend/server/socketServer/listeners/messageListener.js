import listener from 'listener'

class messageListener extends listener {
	constructor(notificationHandler, channel) {
		super(notificationHandler);
		this.channel = channel;
	}
}

export default messageListener

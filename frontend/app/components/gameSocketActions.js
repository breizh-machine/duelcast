export const INIT_CONNECTION = 'INIT_CONNECTION'
export function initConnection() {
	return {
		type: INIT_CONNECTION
	}
}

export const JOIN_LOBBY = 'JOIN_LOBBY'
export function joinLobby(lobby) {
	return {
		type: JOIN_LOBBY,
		lobby: lobby
	}
}

export const UPDATE_LATENCY = 'UPDATE_LATENCY'
export function updateLatency(latency) {
	return {
		type: UPDATE_LATENCY,
		latency: latency
	}
}


export const UPDATE_POSITION = 'UPDATE_POSITION'
export function updatePosition(position) {
	return {
		type: UPDATE_POSITION,
		position: position
	}
}



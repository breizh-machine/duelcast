import { INIT_CONNECTION, JOIN_LOBBY, UPDATE_LATENCY, UPDATE_POSITION } from './gameSocketActions'

function socketServer(state = {
    socketStatus: 'Disconnected',
    latency: 9999,
    position: {x: -1000, y:-1000}
}, action) {
    switch (action.type) {
        case INIT_CONNECTION:
            return Object.assign({}, state, {
                socketStatus: 'Connected'
            })

        case JOIN_LOBBY:
            return Object.assign({}, state, {
                socketStatus: `Connected to lobby ${action.lobby}`
            })

        case UPDATE_LATENCY:
            return Object.assign({}, state, {
                latency: `${action.latency}ms`
            })

        case UPDATE_POSITION:
            return Object.assign({}, state, {
                position: action.position
            })
        default:
            return state
    }
}

export default socketServer;
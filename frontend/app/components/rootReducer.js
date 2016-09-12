import { combineReducers } from 'redux'
import socketServer from './gameSocketReducer'

const rootReducer = combineReducers({
    socketServer
});

export default rootReducer
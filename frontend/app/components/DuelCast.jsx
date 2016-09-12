import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { initConnection, joinLobby, updateLatency, updatePosition } from './gameSocketActions'

class DuelCast extends Component {
    constructor(props) {
        super(props);
        this.onLaunchClicked = this.onLaunchClicked.bind(this);
    }

    onLaunchClicked() {
        console.log('emitting launch rocket');
        this.socket.emit('launch-rocket');
    }

    componentWillMount() {
        const { dispatch } = this.props;
        var socket = io.connect('http://localhost:3002', {'forceNew': true, reconnect:false });
        this.socket = socket;
        socket.on('connection-confirmation', function(message) {
            var startTime;
            socket.on('pong2', function() {
                dispatch(updateLatency(Date.now() - startTime));
            });
            setInterval(function() {
                startTime = Date.now();
                socket.emit('ping2');
            }, 5000);

            dispatch(initConnection());
            const gameLobby = `lobby-${message.gameId}`
            socket.on(gameLobby, function(message){
                dispatch(joinLobby(gameLobby));
            })
            socket.emit(`client-${message.clientId}`);
            socket.on('display-item', function(position){
                dispatch(updatePosition(position))
            })
        })
        console.log(socket);

    }

    render() {
        const { socketStatus, latency, position } = this.props;
        const divStyle = {
            position: 'absolute',
            bottom: position.y,
            left: 300
        }
        return <div>
            <div>
                Duel cast app - {socketStatus} - {latency}
            </div>
            <div style={divStyle}>o</div>
            <button onClick={this.onLaunchClicked}>
                launch
            </button>
        </div>
    }
}

DuelCast.propTypes = {
    socketStatus: React.PropTypes.string
}

function mapStateToProps(state) {
    return {
        socketStatus: state.socketServer.socketStatus,
        latency: state.socketServer.latency,
        position: state.socketServer.position
    }
}

export default connect(mapStateToProps)(DuelCast)


import React, { Component } from 'react';
import RequestsContainer from '../containers/RequestsContainer';
import { connect } from 'react-redux';
import { getLobby } from '../actions/lobbyActions';

class Lobby extends Component {
    componentDidMount() {
        this.props.getLobby(this.props.match.params.id)
    }    

    micRequired = () => {
        if (this.props.lobby.mic_required) {
            return 'Mic is required'
        } else {
            return 'No mic required'
        }
    }

    render() { 
        return (
            <div className='bg-transparent'>
                <div>
                    <h2>{this.props.lobby.gamertag}</h2>
                    <p>{this.props.lobby.gamemode}</p>
                    <p>{this.props.lobby.platform}</p>
                    <p>{this.micRequired()}</p>
                    <p>{this.props.lobby.region} - {this.props.lobby.skill_level}</p>
                    <p>{this.props.lobby.description}</p>
                </div>
                <div>
                    <h2>Request to Join</h2>
                    <RequestsContainer lobbyId={this.props.lobby.id} />
                </div>
            </div>
    )
    
    }
}

const mapStateToProps = state => {
    return {
        lobby: state.lobbies.current,
        loading: state.lobbies.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLobby: (id) => dispatch(getLobby(id)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
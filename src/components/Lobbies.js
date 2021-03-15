import React, { Component } from 'react';
import LobbyCard from './LobbyCard';
import { connect } from 'react-redux';
import { fetchRequests, addRequest } from '../actions/requestActions';

class Lobbies extends Component {
    listLobbies = () => {
        return this.props.lobbies.map(lobby => <LobbyCard 
            id={lobby.id} 
            gamertag={lobby.gamertag}
            region={lobby.region} 
            platform={lobby.platform} 
            gamemode={lobby.gamemode}
            description={lobby.description}
            mic={lobby.mic_required}
            skillLevel={lobby.skill_level}
            // userId={lobby.user_id}
            />)
    }

    render() { 
        return ( 
            <div>
                {this.listLobbies()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        requests: state.requests.list,
        loading: state.requests.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRequests: () => dispatch(fetchRequests()),
        addRequest: request => dispatch(addRequest(request))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Lobbies);
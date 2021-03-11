import React, { Component } from 'react';
import LobbyCard from './LobbyCard';

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
 
export default Lobbies;
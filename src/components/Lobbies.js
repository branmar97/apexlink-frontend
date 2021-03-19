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
            <div className='px-4 max-w-3xl mx-auto bg-transparent mt-16'>
                <h2 className='font-bold text-2xl uppercase mb-6'>Browse Lobbies</h2>

                <div className='flex grid grid-cols-2 gap-4'>
                    {this.listLobbies()}
                </div>
            </div>
        );
    }
}

 
export default Lobbies;
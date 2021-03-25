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
            createdAt={lobby.created_at}
            // userId={lobby.user_id}
            />)
    }

    render() { 
        return ( 
            <div className='px-4 max-w-6xl mx-auto bg-transparent mt-16'>
                <h2 className='font-bold text-2xl uppercase mb-6'>Browse Lobbies</h2>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {this.listLobbies()}
                </div>
            </div>
        );
    }
}

 
export default Lobbies;
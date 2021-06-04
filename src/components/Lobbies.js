import React, { useEffect } from 'react';
import LobbyCard from './LobbyCard';


const Lobbies = ({ lobbies }) => {
    const listLobbies = () => {
        return lobbies.map(lobby => <LobbyCard 
            key={lobby.id}
            id={lobby.id}
            gamertag={lobby.user.gamertag}
            region={lobby.region}
            platform={lobby.platform}
            gamemode={lobby.gamemode}
            shortDesc={lobby.short_desc}
            mic={lobby.mic_required}
            skillLevel={lobby.skill_level}
            createdAt={lobby.created_at}
            requests={lobby.requests}
        />)
    }

    return (
        <div className='mx-auto bg-transparent mt-16'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {listLobbies()}
            </div>
        </div>
    )
}


 
export default Lobbies;
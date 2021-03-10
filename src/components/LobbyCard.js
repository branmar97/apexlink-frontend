import React from 'react';

const LobbyCard = ({id, region, platform, gamemode, description, mic, userId}) => {
    const micRequired = () => {
        if (mic) {
            return "Mic is required"
        } else {
            return "No mic required"
        }
    }
    
    return ( 
        <div>
            <h2>Lobby {id}</h2>
            <p>{region}</p>
            <p>{micRequired()}</p>
            <p>{platform}</p>
            <p>{gamemode}</p>
            <p>{description}</p>
        </div>
     );
}
 
export default LobbyCard;
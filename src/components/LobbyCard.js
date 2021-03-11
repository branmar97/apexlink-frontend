import React from 'react';

const LobbyCard = ({id, gamertag, region, platform, gamemode, description, mic, skillLevel}) => {
    const micRequired = () => {
        if (mic) {
            return "Mic is required"
        } else {
            return "No mic required"
        }
    }
    
    return ( 
        <div>
            <h2>{gamertag}</h2>
            <p>{gamemode}</p>
            <p>{platform}</p>
            <p>{micRequired()}</p>
            <p>{region} - {skillLevel}</p>
            <p>{description}</p>
        </div>
     );
}
 
export default LobbyCard;
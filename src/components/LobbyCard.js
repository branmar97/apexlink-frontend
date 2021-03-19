import React from 'react';
import { Link } from 'react-router-dom';

const LobbyCard = ({id, gamertag, region, platform, gamemode, description, mic, skillLevel}) => {
    const micRequired = () => {
        if (mic) {
            return (
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" /></svg>
            )
        } else {
            return null
        }
    }

    const platformType = () => {
        if (platform === "Xbox") {
            return (
                <img src="https://img.icons8.com/fluent/24/000000/xbox.png"/>
            )
        } else if (platform === "Playstation") {
            return (
                <img src="https://img.icons8.com/color/24/000000/play-station.png"/>
            )
        } else {
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )
        }
    }
    
    return ( 
        <div className='bg-gray-500 bg-opacity-50 grid grid-cols-2 gap-2 text-gray-200 shadow-2xl'>
            <div className="col-span-2 mt-6 ml-6 font-semibold text-xl tracking-wider uppercase"><h2><Link to={`/lobbies/${id}`}>{gamertag}</Link></h2></div>
            <div className="col-span-2 ml-6 text-sm"><p>{gamemode} • 30 min</p></div>
            <div className="col-span-2 ml-6 flex">{platformType()} {micRequired()}</div>
            <div className="col-span-2 ml-6 text-sm"><p>{region} • {skillLevel}</p></div>
            <div className="col-span-2 ml-6 mb-6 text-sm text-white"><p>{description}</p></div>
            <div className="col-span-1 ml-6">
                <img src="https://img.icons8.com/small/30/ffffff/group-foreground-selected.png"/>
                <span>7 Interested</span>  
            </div>
            <div className="col-span-1 ml-6 mr-6 mb-6">
                <Link to={`/lobbies/${id}`}>
                    <button className='bg-red-600 hover:bg-red-500 text-white hover:text-white py-2 px-4 text-sm uppercase'>
                    View Lobby
                    </button>
                </Link>
            </div>
        </div>
     );
}
 
export default LobbyCard;
import React from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'timeago-react';

const LobbyCard = ({id, gamertag, region, platform, gamemode, shortDesc, mic, skillLevel, live, createdAt, requests}) => {
    const micRequired = () => {
        if (mic) {
            return (
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" /></svg>
            )
        } else {
            return null
        }
    }

    const liveStatus = () => {
        if (live) {
            return (
                <svg className="animate-ping w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
            )
        } else {
            return (
                <svg className="text-red-600 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" /></svg>
            )
        }
    }

    const platformType = () => {
        if (platform === "Xbox") {
            return (
                <img alt='Xbox Icon' src="https://img.icons8.com/fluent/24/000000/xbox.png"/>
            )
        } else if (platform === "Playstation") {
            return (
                <img alt='Playstation Icon' src="https://img.icons8.com/color/24/000000/play-station.png"/>
            )
        } else {
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )
        }
    }
    
    return ( 
        <div className='card shadow-2xl bg-gray-500 bg-opacity-50 text-gray-200 px-6 py-8 sm:p-10'>
            
            <div className="flex font-semibold text-xl tracking-wider uppercase">
                <h2><Link to={`/lobbies/${id}`}>{gamertag}</Link></h2>
                <div className='flex float-right text-green-600 ml-10 text-xs'>
                    {liveStatus()} <p className="ml-2 mt-1">LIVE</p>
                </div>
            </div>

            <div className="text-sm"><p>{gamemode} • {<TimeAgo datetime={createdAt}
                                                                                        locale='en'
                                                                                                />}</p></div>
            <div className="flex mt-2">{platformType()} {micRequired()}</div>
            <div className="text-sm mt-2"><p>{region} • {skillLevel}</p></div>
            <div className="text-sm mt-4 text-white"><p>{shortDesc}</p></div>
            <div className="mt-8 inline-block float-left">
                <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>

                <span className='text-sm ml-1 mt-0.5'>{requests.length} Interested</span>  
            </div>
            <div className="mt-6 inline-block float-right">
                <Link to={`/lobbies/${id}`}>
                    <button className='flex bg-red-600 hover:bg-red-500 text-white hover:text-white py-2 px-3 text-sm uppercase'>
                    View Lobby
                    </button>
                </Link>
            </div>
        </div>
     );
}
 
export default LobbyCard;
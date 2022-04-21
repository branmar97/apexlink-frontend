import React, { useEffect } from 'react';
import RequestsContainer from './RequestsContainer';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { getLobby, updateLobby } from '../actions/lobbyActions';
import { Link } from 'react-router-dom';
import isObjNotEmpty from '../helpers';
import TimeAgo from 'timeago-react';

const LobbyContainer = ({ lobby, getLobby, updateLobby, currentUser, match, loading }) => {
    useEffect(() => {
        getLobby(match.params.id);
    }, [])

    const endSessionHandler = () => {
        const newLobby = {
            ...lobby,
            live: false
        }
        updateLobby(newLobby);
    }

    const updateLiveStatus = () => {
        if (lobby.user.id == currentUser.id && lobby.live) {
            return (
                <form onSubmit={endSessionHandler()}>
                    <button type="submit">End Session</button>
                </form>
            )
        }
    }

    const micRequired = () => {
        if (lobby.mic_required) {
            return (
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" /></svg>
            )
        } else {
            return null
        }
    }

    const liveStatus = () => {
        if (lobby.live) {
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
        if (lobby.platform === "Xbox") {
            return (
                <img alt='Xbox Icon' src="https://img.icons8.com/fluent/24/000000/xbox.png"/>
            )
        } else if (lobby.platform === "Playstation") {
            return (
                <img alt='Playstation Icon' src="https://img.icons8.com/color/24/000000/play-station.png"/>
            )
        } else {
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )
        }
    }
    
    if (loading || !isObjNotEmpty(lobby)) {
        return (
            <div className='h-screen max-w-6xl justify-center flex flex-col mx-auto
            items-center content-center font-heebo'>
                <ReactLoading type={'spin'} color={'#ef4445'} height={200} width={100} className={'align-center'} />
                <h1 className='text-xl sm:text-2xl text-white text-center uppercase mb-4'>Don't worry, this shouldn't take long</h1>
            </div>
        )
    } else if (lobby) {
        return (
            <div className='font-heebo text-white my-32 max-w-6xl mx-auto'>
                <Link to='/lobbies'>
                    <span className='flex mb-4'>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <p className='mt-0.5 ml-2 text-xl'>Back</p>
                    </span>
                </Link>
    
                <div className='shadow-2xl bg-gray-500 bg-opacity-50 text-gray-200 p-4 py-6 sm:p-10 flex flex-col overflow-hidden'>  
                    <div>
                        <small className="text-sm mb-2">Lobby #{lobby.id}</small>
                        <div className='flex float-right text-green-600 ml-10 text-md'>
                            {liveStatus()} <p className="ml-2">LIVE</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <h2 className="font-semibold text-4xl tracking-wider uppercase mr-4">{lobby.user.gamertag}</h2>
                        <img alt='Host Icon' src="https://img.icons8.com/android/40/ffffff/crown.png"/>
                    </div>
                    <p className="text-sm mt-4">{lobby.gamemode} • {<TimeAgo datetime={lobby.created_at}
                                                                                        locale='en'
                                                                                                />}</p>
                    <div className="flex mt-2">{platformType()}{micRequired()}</div>
                    <p className='text-sm mt-2'>{lobby.region} • {lobby.skill_level}</p>
                    <p className="text-sm mt-4 text-white">{lobby.description}</p>
                </div>
                <div>
                    <RequestsContainer lobbyId={lobby.id} />
                </div>
            </div>
        )
    } else {
        return null
    }

}

const mapStateToProps = state => {
    return {
        lobby: state.lobbies.current,
        loading: state.lobbies.loading,
        currentUser: state.auth.state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLobby: (id) => dispatch(getLobby(id)),
        updateLobby: (id) => dispatch(updateLobby(id)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);
import React, { useEffect } from 'react';
import RequestsContainer from '../containers/RequestsContainer';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { getLobby } from '../actions/lobbyActions';
import { Link } from 'react-router-dom';
import isObjNotEmpty from '../helpers';
import TimeAgo from 'timeago-react';

const Lobby = ({ lobby, getLobby, match, loading }) => {
    useEffect(() => {
        getLobby(match.params.id);
    }, [])

    const micRequired = () => {
        if (lobby.mic_required) {
            return (
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" /></svg>
            )
        } else {
            return null
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
            <div className='bg-transparent h-screen max-w-6xl justify-center flex flex-col mx-auto
            items-center content-center font-heebo'>
                <ReactLoading type={'spin'} color={'#ef4445'} height={200} width={100} className={'align-center'} />
                <h1 className='text-xl sm:text-2xl text-white text-center uppercase mb-4'>Don't worry, this shouldn't take long</h1>
            </div>
        )
    } else if (lobby) {
        return (
            <div className='bg-transparent font-heebo text-white my-32 px-4 max-w-6xl mx-auto'>
                <Link to='/lobbies'>
                    <span className='flex mb-4'>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <p className='mt-0.5 ml-2 text-xl'>Back</p>
                    </span>
                </Link>
    
                <div className='shadow-2xl bg-gray-500 bg-opacity-50 text-gray-200 p-10'>  
                    <p className="text-sm mb-6 mt-2 float-right">Lobby #{lobby.id}</p>
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
        loading: state.lobbies.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLobby: (id) => dispatch(getLobby(id)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
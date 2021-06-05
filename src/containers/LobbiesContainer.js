import React, { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { fetchLobbies, addLobby } from '../actions/lobbyActions';
import Search from '../components/Search';
import LobbyFormContainer from './LobbyFormContainer';


const LobbiesContainer = ({ fetchLobbies, addLobby, lobbies, loading }) => {
    useEffect(() => {
        fetchLobbies()
    }, [])

    if (loading) {
        return (
            <div className='bg-transparent h-screen max-w-6xl justify-center flex flex-col mx-auto
            items-center content-center font-heebo'>
                <ReactLoading type={'spin'} color={'#ef4445'} height={200} width={100} className={'align-center'} />
                <h1 className='text-xl sm:text-2xl text-white text-center uppercase mb-4'>Don't worry, this shouldn't take long</h1>
            </div>
        );
    } else {
        return ( 
            <div className='bg-transparent 
             font-heebo text-white my-32'>
                <LobbyFormContainer addLobby={addLobby} />
                <Search lobbies={lobbies} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lobbies: state.lobbies.list,
        loading: state.lobbies.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLobbies: () => dispatch(fetchLobbies()),
        addLobby: lobby => dispatch(addLobby(lobby))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(LobbiesContainer);
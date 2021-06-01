import React, { useEffect } from 'react';
import LobbyCard from './LobbyCard';
import { connect } from 'react-redux';
import { fetchRequests } from '../actions/requestActions';

const Lobbies = ({ lobbies, requests }) => {
    useEffect(() => {
        fetchRequests();
    }, [])

    const listLobbies = () => {
        return lobbies.map(lobby => <LobbyCard 
            key={lobby.id}
            id={lobby.id}
            gamertag={lobby.user.gamertag}
            region={lobby.region}
            platform={lobby.platform}
            gamemode={lobby.gamemode}
            description={lobby.description}
            mic={lobby.mic_required}
            skillLevel={lobby.skill_level}
            createdAt={lobby.created_at}
            requests={requests}
        />)
    }

    return (
        <div className='px-4 max-w-6xl mx-auto bg-transparent mt-16'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {listLobbies()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        requests: state.requests.list,
        loading: state.requests.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRequests: () => dispatch(fetchRequests())
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Lobbies);
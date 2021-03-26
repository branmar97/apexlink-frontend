import React, { Component } from 'react';
import LobbyCard from './LobbyCard';
import { connect } from 'react-redux';
import { fetchRequests } from '../actions/requestActions';


class Lobbies extends Component {
    componentDidMount() {
        this.props.fetchRequests()
    }
    
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
            requests={this.props.requests}
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
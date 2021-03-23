import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLobbies, addLobby } from '../actions/lobbyActions';
import Lobbies from '../components/Lobbies';
import LobbyForm from '../components/LobbyForm';

class LobbiesContainer extends Component {
    componentDidMount() {
        this.props.fetchLobbies()
    }    

    render() { 
        return ( 
            <div className='bg-transparent 
             font-heebo text-white my-32'>
                <LobbyForm addLobby={this.props.addLobby} />
                <Lobbies lobbies={this.props.lobbies} />
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
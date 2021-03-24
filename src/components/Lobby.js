import React, { Component } from 'react';
import RequestsContainer from '../containers/RequestsContainer';
import { connect } from 'react-redux';
import { getLobby } from '../actions/lobbyActions';

class Lobby extends Component {
    componentDidMount() {
        this.props.getLobby(this.props.match.params.id)
    }    

    micRequired = () => {
        if (this.props.lobby.mic_required) {
            return (
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" /></svg>
            )
        } else {
            return null
        }
    }

    platformType = () => {
        if (this.props.lobby.platform === "Xbox") {
            return (
                <img src="https://img.icons8.com/fluent/24/000000/xbox.png"/>
            )
        } else if (this.props.lobby.platform === "Playstation") {
            return (
                <img src="https://img.icons8.com/color/24/000000/play-station.png"/>
            )
        } else {
            return (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )
        }
    }

    render() { 
        return (
            <div className='bg-transparent font-heebo text-white my-32 px-4 max-w-6xl mx-auto'>
                <div className='shadow-2xl bg-gray-500 bg-opacity-50 text-gray-200 p-10'>
                    <p className="text-sm mb-6 mt-2 float-right">Lobby #{this.props.lobby.id}</p>
                    <h2 className="font-semibold text-4xl tracking-wider uppercase">{this.props.lobby.gamertag}</h2>
                    <p className="text-sm">{this.props.lobby.gamemode} • 30 min</p>
                    <div className="flex mt-2">{this.platformType()}{this.micRequired()}</div>
                    <p className='text-sm mt-2'>{this.props.lobby.region} • {this.props.lobby.skill_level}</p>
                    <p className="text-sm mt-4 text-white">{this.props.lobby.description}</p>
                </div>
                <div>
                    <RequestsContainer lobbyId={this.props.lobby.id} />
                </div>
            </div>
    )
    
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLobbies } from '../actions/lobbyActions';
import Lobbies from '../components/Lobbies';

class LobbiesContainer extends Component {
   
    render() { 
        return ( 
            <div>

            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        lobbies: state.lobbies,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLobbies: () => dispatch(fetchLobbies())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(LobbiesContainer);
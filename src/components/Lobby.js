import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLobby } from '../actions/lobbyActions';

class Lobby extends Component {
    render() { 
        return ( 
            <div>

            </div>
         );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getLobby: (id) => dispatch(getLobby(id)),
    }
}
 
export default connect(null, mapDispatchToProps)(Lobby);
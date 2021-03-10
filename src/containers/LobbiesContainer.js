import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLobbies } from '../actions/lobbyActions';
import Lobbies from '../components/Lobbies';

class LobbiesContainer extends Component {
    componentDidMount() {
        this.props.fetchLobbies()
    }    

    render() { 
        return ( 
            <div>
                <h1>Lobbies Container</h1>
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
        fetchLobbies: () => dispatch(fetchLobbies())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(LobbiesContainer);
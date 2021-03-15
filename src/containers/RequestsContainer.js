import React, { Component } from 'react';
import Requests from '../components/Requests';
import RequestsForm from '../components/RequestsForm';
import { connect } from 'react-redux';
import { fetchRequests, addRequest } from '../actions/requestActions';

class RequestsContainer extends Component {
    render() { 
        return ( 
            <div>
                <RequestsForm 
                    addRequest={this.props.addRequest}
                    lobbyId={this.props.lobby.id}
                />
                <Requests
                />
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
        fetchRequests: () => dispatch(fetchRequests()),
        addRequest: request => dispatch(addRequest(request))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(RequestsContainer);
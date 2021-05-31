import React, { Component, useEffect } from 'react';
import Requests from '../components/Requests';
import RequestsForm from '../components/RequestsForm';
import { connect } from 'react-redux';
import { fetchRequests, addRequest } from '../actions/requestActions';

const RequestsContainer = ({ fetchRequests, addRequest, requests, lobbyId }) => {
    useEffect(() => {
        fetchRequests()
    }, [])

    return ( 
        <div className='bg-transparent 
        font-heebo text-white my-32'>
            <RequestsForm 
                addRequest={addRequest}
                lobbyId={lobbyId}
            />
            <Requests
                requests={requests}
                lobbyId={lobbyId}
            />
        </div>
     );
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
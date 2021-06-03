import React, { useEffect } from 'react';
import Requests from '../components/Requests';
import RequestsForm from '../components/RequestsForm';
import { connect } from 'react-redux';
import { fetchRequests } from '../actions/requestActions';

const RequestsContainer = ({ fetchRequests, requests, lobbyId }) => {
    useEffect(() => {
        fetchRequests()
    }, [])

    return ( 
        <div className='bg-transparent 
        font-heebo text-white my-32'>
            <RequestsForm 
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
        fetchRequests: () => dispatch(fetchRequests())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(RequestsContainer);
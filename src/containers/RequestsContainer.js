import React, { useEffect } from 'react';
import Requests from '../components/Requests';
import RequestsForm from './RequestsFormContainer';
import { connect } from 'react-redux';
import { fetchRequests } from '../actions/requestActions';

const RequestsContainer = ({ fetchRequests, requests, lobbyId, liveStatus }) => {
    useEffect(() => {
        fetchRequests(lobbyId)
    }, [])

    const checkLiveStatus = () => {
        if (liveStatus) {
            return (
                <div>
                    <RequestsForm 
                    lobbyId={lobbyId}
                    />
                    <Requests
                    requests={requests}
                    lobbyId={lobbyId}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <h2 className='text-center text-white px-4 max-w-6xl mx-auto mt-16'>The lobby is offline and no longer accepting join requests.</h2>
                    <Requests
                    requests={requests}
                    lobbyId={lobbyId}
                    />
                </div>
            )
        }
    }

    return ( 
        <div className='font-heebo text-white my-32'>
            {checkLiveStatus()}
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
        fetchRequests: (lobbyId) => dispatch(fetchRequests(lobbyId))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(RequestsContainer);
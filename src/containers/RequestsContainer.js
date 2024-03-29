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
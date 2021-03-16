import React from 'react';
import Request from './Request';

const Requests = ({ requests, lobbyId }) => {
    const filteredRequests = requests.filter(request => request.lobbyId === lobbyId);
    
    const requestList = filteredRequests.map(request => {
      return <Request id={request.id} request={request} />
    })
    
    return ( 
        <div>
            <ul>
                {requestList}
            </ul>
        </div>
     );
}
 
export default Requests;
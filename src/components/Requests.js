import React from 'react';

const Requests = ({ requests, lobbyId }) => {
    const filteredRequests = requests.filter(request => request.lobbyId === lobbyId);
    
    // const requestList = filteredRequests.map(request => {
    //   return <Request id={request.id} request={request} />
    // })
    
    return ( 
        <div>
            <ul>
                
            </ul>
        </div>
     );
}
 
export default Requests;
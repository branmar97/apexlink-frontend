import React from 'react';
import Request from './Request';

const Requests = ({ requests, lobbyId }) => {
    const filteredRequests = requests.filter(request => request.lobby_id === lobbyId);
    
    const requestList = filteredRequests.map(request => {
      return <Request request={request} />
    })

    const handleShowRequests = () => {
        if (requestList.length === 0) {
            return <h2 className='text-center text-white mt-6'>There are no requests to display.</h2>
        } else {
            return requestList
        }
    }
    
    return ( 
        <div className='max-w-6xl mx-auto bg-transparent mt-16 my-32'>
            <h1 className='font-bold text-2xl uppercase mb-6'>Requests ({requestList.length})</h1>
            <div className='grid grid-cols-1 gap-10'>
                {handleShowRequests()}
            </div>
        </div>
     );
}
 
export default Requests;
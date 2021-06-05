import React from 'react';
import Request from './Request';

const Requests = ({ requests }) => {
    const renderRequests = requests.map(request => {
      return <Request key={request.id} request={request} />
    }).reverse()

    const handleShowRequests = () => {
        if (requests.length === 0) {
            return <h2 className='text-center text-white mt-6'>There are no requests to display.</h2>
        } else {
            return renderRequests
        }
    }

    if (requests) {
        return (
            <div className='max-w-6xl mx-auto bg-transparent mt-16 my-32'>
                <h1 className='font-bold text-2xl uppercase mb-6'>Requests ({requests.length})</h1>
                <div className='grid grid-cols-1 gap-10'>
                    {handleShowRequests()}
                </div>
            </div>
        )
    } else {
        return null
    }
}
 
export default Requests;
import React from 'react';

const Request = ({ id, request }) => {
    return ( 
        <div className='card shadow-2xl bg-gray-500 bg-opacity-50 text-gray-200 p-10'>
            <p className="text-sm mt-1 float float-right">30 min ago</p>
            <h4 className="float font-semibold text-xl tracking-wider uppercase">{request.gamertag}</h4>
            <p className="text-sm mt-4 text-white">{request.description}</p>
        </div>
     );
}
 
export default Request;
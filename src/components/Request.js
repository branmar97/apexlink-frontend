import React from 'react';
import TimeAgo from 'timeago-react';

const Request = ({ request }) => {

    return ( 
        <div className='card shadow-2xl bg-gray-500 bg-opacity-50 text-gray-200 p-10'>
            <p className="text-sm mt-1 float float-right">{<TimeAgo datetime={request.created_at}
                                                                                        locale='en'
                                                                                                />}</p>
            <h4 className="float font-semibold text-xl tracking-wider uppercase">{request.user.gamertag}</h4>
            <p className="text-sm mt-4 text-white">{request.description}</p>
        </div>
     );
}
 
export default Request;
import React from 'react';

const Request = ({ id, request }) => {
    return ( 
        <li key={id}>
            <h4>{request.gamertag}</h4>
            <p>{request.description}</p>
        </li>
     );
}
 
export default Request;
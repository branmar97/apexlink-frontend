import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return ( 
        <nav>
            <Link to="/"><h3>Apexlink</h3></Link>
            <ul>
                <Link to='/lobbies'><li>Browse</li></Link>
                <li>Create Lobby</li>
                <li>About</li>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </nav>
     );
}
 
export default Nav;
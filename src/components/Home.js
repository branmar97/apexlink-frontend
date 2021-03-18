import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div>
            <h2>BUILD YOUR NEXT ELITE SQUAD</h2>
            <p>Connect with others and find the best teammates.</p>

            <Link to='/about'><button>LEARN MORE</button></Link>

            <h3>RECENT LOBBIES</h3>
        </div>
     );
}
 
export default Home;
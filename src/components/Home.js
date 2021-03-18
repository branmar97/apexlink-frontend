import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className='bg-transparent h-screen flex flex-col
        justify-center items-center font-heebo'>

            <h1 className='text-6xl text-red-500 uppercase mb-4'>Build Your Next Elite Squad</h1>
            <p className='text-2xl text-white uppercase mb-4'>Connect with others and find the best teammates</p>

            <Link to='/about'><button className="bg-transparent hover:bg-red-500 text-white hover:text-white py-4 px-8 border border-white hover:border-transparent uppercase mt-10">Learn More</button></Link>

            <h3>RECENT LOBBIES</h3>
        </div>
     );
}
 
export default Home;
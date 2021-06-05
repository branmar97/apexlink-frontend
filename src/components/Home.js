import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className='bg-transparent h-screen flex flex-col
        justify-center items-center font-heebo'>

            <h1 className='text-9xl sm:text-12xl text-red-500 uppercase text-center mb-4 tracking-widest'>Apex<span className='text-white'>Link</span></h1>
            <h1 className='text-2xl sm:text-4xl text-white text-center mb-4'>Build an Elite Apex Legends Squad</h1>

            <Link to='/lobbies'><button className="bg-transparent hover:bg-red-500 text-white hover:text-white py-4 px-8 border border-white hover:border-transparent uppercase mt-10">Get Started</button></Link>
        </div>
     );
}
 
export default Home;
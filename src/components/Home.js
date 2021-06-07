import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className='h-screen max-w-6xl justify-center flex flex-col mx-auto
        items-center content-center'>

            <h1 className='text-5xl sm:text-12xl text-red-500 uppercase text-center mb-4 tracking-widest'>Apex<span className='text-white'>Link</span></h1>
            <h1 className='text-xl sm:text-3xl text-white text-center mb-4'>Build an Elite Apex Legends Squad</h1>

            <Link to='/lobbies'><button className="bg-transparent hover:bg-red-500 text-white hover:text-white py-4 px-8 border border-white hover:border-transparent uppercase mt-10">Get Started</button></Link>
        </div>
     );
}
 
export default Home;
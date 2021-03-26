import React from 'react';
import { Link } from 'react-router-dom';
import apexlinkLogo from '../images/apexlinkLogo.png';

const Nav = ({toggle}) => {
    return ( 
        <nav className='flex justify-between items-center h-16 bg-transparent fixed text-white relative font-mono pt-16 pb-16 mb-10' role='navigation'>
            {/* Logo */}
            <Link to="/" className='text-5xl tracking-widest pl-16 flex justify-between items-center font-duke'>
                
            <img className='object-contain h-full hover:scale-150' src={apexlinkLogo} alt='Logo' />
            
            <span className='text-red-500 hover:scale-125'>APEX</span>LINK
            
            </Link>


            <div className='px-16 cursor-pointer md:hidden' onClick={toggle}>
                <svg className="w-6 h-6 transform transition duration-500 hover:scale-125" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />

                </svg>
            </div>

            <div className='pr-8 md:block hidden font-heebo uppercase'>
                <Link to='/' className='p-4 hover:text-red-500'>Home</Link>
                <Link to='/about' className='p-4 hover:text-red-500'>About</Link>
                <Link to='/lobbies' className='p-4 pr-12 hover:text-red-500'>Browse</Link>
            </div>
        </nav>
     );
}
 
export default Nav;
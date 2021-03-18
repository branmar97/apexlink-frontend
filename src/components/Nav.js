import React from 'react';
import { Link } from 'react-router-dom';
import apexlinkLogo from '../images/apexlinkLogo.png';

const Nav = () => {
    return ( 
        <nav className='flex justify-between items-center h-16 bg-transparent text-white relative font-mono pt-16 pb-16 mb-10' role='navigation'>
            {/* Logo */}
            <Link to="/" className='text-3xl pl-16 flex justify-between items-center'>
                
            <img className='object-contain h-full' src={apexlinkLogo} alt='Logo' />
            
            <span className='text-red-500'>APEX</span>LINK
            
            </Link>


            <div className='px-16 cursor-pointer md:hidden'>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />

                </svg>
            </div>

            <div className='pr-8 md:block hidden'>
                <Link to='/lobbies' className='p-4'>BROWSE</Link>
                <Link to='/about' className='p-4 pr-12'>ABOUT</Link>
            </div>
        </nav>
     );
}
 
export default Nav;
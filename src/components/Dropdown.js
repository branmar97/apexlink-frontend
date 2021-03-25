import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
    return ( 
        <div className={isOpen ? 'grid grid-rows-3 text-center items-center text-white bg-gray-500 bg-opacity-50' : 'hidden'} onClick={toggle}>
            <Link to='/' className='p-4'>Home</Link>
            <Link to='/about' className='p-4'>About</Link>
            <Link to='/lobbies' className='p-4'>Browse</Link>
        </div>
     );
}
 
export default Dropdown;
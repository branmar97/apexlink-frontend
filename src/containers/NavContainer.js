import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import apexlinkLogo from '../images/apexlinkLogo.png';
import Logout from "../components/auth/Logout";
import { checkAuth } from "../actions/auth";

const NavContainer = ({ authChecked, loggedIn, currentUser, dispatchCheckAuth, toggle}) => {
    useEffect(() => {
        dispatchCheckAuth();
    }, [loggedIn])

    const renderAuthLinks = () => {
        if (authChecked) {
            return loggedIn ? (
                <>
                    <span className='ml-12 mr-6'>
                        <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> 
                        <span className='ml-2 text-red-500'>{currentUser.gamertag}</span>
                    </span>
                    <Logout />
                </>
            ) : (
                <>
                    <Link to='/login'><button className="bg-transparent hover:bg-red-700 text-red-500 hover:text-white py-2 px-4 ml-6 border border-red-500 hover:border-transparent uppercase">Login</button></Link>
                    <Link to='/signup'><button className="bg-transparent hover:bg-red-700 text-red-500 hover:text-white py-2 px-4 ml-2 border border-red-500 hover:border-transparent uppercase">Signup</button></Link>
                </>
            );
        } else {
            return null
        }
    }

    return (
        <nav className='flex flex-col justify-items-center items-center content-center' role='navigation'>
            {/* Logo */}
            <Link to="/" className='text-4xl tracking-widest flex justify-between items-center font-heebo'>
                
            <img className='hover:scale-150' src={apexlinkLogo} alt='Logo' />
            
            <span className='text-red-500 hover:scale-125 ml-4'>APEX<span className='text-white'>LINK</span></span>
            
            </Link>


            <div className='px-16 cursor-pointer text-white lg:hidden mb-8' onClick={toggle}>
                <svg className="h-8 transform transition duration-500 hover:scale-125" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />

                </svg>
            </div>

            <div className='lg:block hidden font-heebo text-white uppercase mt-6'>
                <Link to='/' className='hover:text-red-500'>Home</Link>
                <Link to='/lobbies' className='ml-4 mr-4  hover:text-red-500'>Browse</Link>
                {renderAuthLinks()}
            </div>
        </nav>
    )
}
 
const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
    return { authChecked, loggedIn, currentUser };
};

const mapDispatchToProps = (dispatch) => {
    return {
      dispatchCheckAuth: () => dispatch(checkAuth())
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
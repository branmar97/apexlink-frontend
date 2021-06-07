import { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkAuth } from "../actions/auth";
import Logout from "../components/auth/Logout";
import { Link } from 'react-router-dom';

const DropdownContainer = ({isOpen, toggle, authChecked, loggedIn, currentUser, dispatchCheckAuth}) => {
    useEffect(
        () => {
            dispatchCheckAuth()
        }, []
    );

    const renderAuthLinks = () => {
        if (authChecked) {
            return loggedIn ? (
                <>
                    <div>
                        <span className='mr-8'>
                        <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> <span className='ml-2 text-red-500'>{currentUser.gamertag}</span>
                        </span>
                        <Logout />
                    </div>
                </>
            ) : (
                <>
                    <div className='p-4'>
                        <Link to='/login' className='p-4 text-white hover:text-red-500'>Login</Link>
                        <Link to='/signup' className='p-4 text-white hover:text-red-500'>Signup</Link>
                    </div>
                </>
            );
        } else {
            return null
        }
    }
    
    return ( 
        <div className={isOpen ? 'grid grid-rows-3 text-center items-center text-white bg-gray-500 bg-opacity-50' : 'hidden'} onClick={toggle}>
            {/* Displays login/signup if logged out OR gamertag/logout if logged in */}
            {renderAuthLinks()}
            <Link to='/' className='p-4'>Home</Link>
            <Link to='/lobbies' className='p-4'>Browse</Link>
        </div>
     );
}

const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
    return { authChecked, loggedIn, currentUser };
};

const mapDispatchToProps = (dispatch) => {
    return {
      dispatchCheckAuth: () => dispatch(checkAuth())
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(DropdownContainer);
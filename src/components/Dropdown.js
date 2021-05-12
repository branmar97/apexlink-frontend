import React from 'react';
import { connect } from 'react-redux';
import { checkAuth } from "../actions/auth";
import Logout from "./auth/Logout";
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

const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
    return { authChecked, loggedIn, currentUser };
};

const mapDispatchToProps = (dispatch) => {
    return {
      dispatchCheckAuth: () => dispatch(checkAuth())
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
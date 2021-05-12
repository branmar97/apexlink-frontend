import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import apexlinkLogo from '../images/apexlinkLogo.png';
import Logout from "./auth/Logout";
import { checkAuth } from "../actions/auth";


class Nav extends React.Component {
    componentDidMount() {
        this.props.dispatchCheckAuth();
    }

    renderAuthLinks() {
        const { authChecked, loggedIn, currentUser } = this.props;
        if (authChecked) {
            return loggedIn ? (
                <>
                    <span className='ml-12 mr-16'>
                    <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> <span className='ml-2 text-red-500'>{currentUser.gamertag}</span>
                    </span>
                    <Logout />
                </>
            ) : (
                <>
                    <Link to='/login' className='p-2 ml-12'><button className="bg-transparent hover:bg-red-700 text-red-500 hover:text-white py-2 px-4 border border-red-500 hover:border-transparent uppercase mt-10">Login</button></Link>
                    <Link to='/signup' className='p-2 mr-12'><button className="bg-transparent hover:bg-red-700 text-red-500 hover:text-white py-2 px-4 border border-red-500 hover:border-transparent uppercase mt-10">Signup</button></Link>
                </>
            );
        } else {
            return null
        }
    }

    render() {
        return (
            <nav className='flex justify-between items-center h-16 bg-transparent text-white relative font-mono pt-16 pb-16 mb-10' role='navigation'>
                {/* Logo */}
                <Link to="/" className='text-5xl tracking-widest mt-8 pl-16 flex justify-between items-center font-duke'>
                    
                <img className='object-contain h-full hover:scale-150' src={apexlinkLogo} alt='Logo' />
                
                <span className='text-red-500 hover:scale-125'>APEX</span>LINK
                
                </Link>


                <div className='px-16 cursor-pointer lg:hidden mt-8' onClick={this.props.toggle}>
                    <svg className="w-8 h-8 transform transition duration-500 hover:scale-125" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />

                    </svg>
                </div>

                <div className='pr-8 mt-8 mr-6 lg:block hidden font-heebo uppercase'>
                    <Link to='/' className='ml-4 mr-4 hover:text-red-500'>Home</Link>
                    <Link to='/about' className='ml-4 mr-4 hover:text-red-500'>About</Link>
                    <Link to='/lobbies' className='ml-4 mr-4  hover:text-red-500'>Browse</Link>
                    {this.renderAuthLinks()}
                </div>
            </nav>
        )
    }
}
 
const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
    return { authChecked, loggedIn, currentUser };
};

const mapDispatchToProps = (dispatch) => {
    return {
      dispatchCheckAuth: () => dispatch(checkAuth())
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
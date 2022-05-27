import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { getProfile } from '../actions/profileActions';

const ProfileContainer = ({ getProfile, currentProfile, match, loading }) => {
    useEffect(() => {
        getProfile(match.params.id)
    }, [])
    
    if (loading) {
        return (
            <div className='h-screen max-w-6xl my-32 justify-center flex flex-col mx-auto
            items-center content-center font-heebo'>
                <ReactLoading type={'spin'} color={'#ef4445'} height={200} width={100} className={'align-center'} />
                <h1 className='text-xl sm:text-2xl text-white text-center uppercase mb-4'>Don't worry, this shouldn't take long</h1>
            </div>
        );
    } else {
        return ( 
            <div className=' 
             font-heebo text-white my-32'>
                <h1>{currentProfile.user.gamertag }</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentProfile: state.profiles.current,
        loading: state.profiles.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfile: id => dispatch(getProfile(id)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);


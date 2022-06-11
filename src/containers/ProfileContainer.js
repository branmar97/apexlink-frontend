import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { getProfile } from '../actions/profileActions';
import { useHistory } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import { current } from '@reduxjs/toolkit';

const ProfileContainer = ({ getProfile, currentProfile, match, loading }) => {
    const history = useHistory();

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
    } else if (currentProfile.user) {
        return ( 
            <div className=' 
            h-screen max-w-6xl my-32 flex flex-col mx-auto font-heebo text-white'>
                <ProfileCard 
                    gamertag={currentProfile.user.gamertag}
                    bio={currentProfile.bio}
                    link={currentProfile.link}
                    avatar={currentProfile.avatar_url}
                    platform={currentProfile.user.platform}
                    region={currentProfile.user.region}
                />
            </div>
        );
    } else {
        history.push('/')
        return null
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


import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../actions/profileActions';

const ProfileContainer = () => {
    return (
        <div></div>
    )
}

const mapStateToProps = state => {
    return {
        currentProfile: state.profiles.current,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfile: id => dispatch(getProfile(id)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);


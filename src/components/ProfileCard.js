import React from 'react';

const ProfileCard = ({ gamertag, bio, link, avatar, platform, region }) => {
    return (
        <div>
            <h1>{gamertag}</h1>
            <p>{region}</p>
            <p>{platform}</p>
            <p>{link}</p>
            <p>{bio}</p>
        </div>
    )
}

export default ProfileCard;
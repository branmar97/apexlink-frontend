import React from 'react';

const ProfileCard = ({ gamertag, bio, link, avatar, platform, region }) => {
    return (
        <div className='card shadow-2xl bg-gray-500 bg-opacity-50 text-gray-200 px-6 py-8 sm:p-10'>
            <img className='inline-block float-left object-cover w-32 h-32 mr-2 rounded-full' src={avatar} />
            <div className='mt-10 ml-10'>
                <h1 className='text-2xl'>{gamertag}</h1>
                <p className='text-xs'>Joined May 20, 2022</p>
            </div>

            <div className='mt-12'>
                <p>{bio}</p>
                <div className='flex space-x-1 text-sm mt-3'>
                    <p>{region}</p>
                    <p>|</p>
                    <p>{platform}</p>
                </div>
                <a className='text-sm text-red-500 hover:text-white' href={link}>{link}</a>
            </div>
        </div>
    )
}

export default ProfileCard;
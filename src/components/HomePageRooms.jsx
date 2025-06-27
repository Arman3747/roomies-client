import React from 'react';
import HomePageRoom from './HomePageRoom';

const HomePageRooms = ({ showRooms }) => {

    return (
        <div className='my-12'>
            <h2 className='text-7xl text-center mb-12'>Find a Roommate</h2>
            <p className='text-2xl text-center mb-6'>Looking for someone to share your space or split the rent? Roomies makes it easy to connect with compatible roommates in your area. Browse profiles, chat securely, and find someone who matches your lifestyle and preferences — whether you're renting a room or searching for one to call home</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    showRooms.map(showRoom => <HomePageRoom key={showRoom._id} showRoom={showRoom}></HomePageRoom>)
                }
            </div>
        </div>
    );
};

export default HomePageRooms;
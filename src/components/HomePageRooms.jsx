import React from 'react';
import HomePageRoom from './HomePageRoom';

const HomePageRooms = ({ showRooms }) => {


    return (

        <div className='my-24'>
            <h2 className='text-7xl text-center mb-12'>Find a Roommate</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    showRooms.map(showRoom => <HomePageRoom key={showRoom._id} showRoom={showRoom}></HomePageRoom>)
                }
            </div>
        </div>


    );
};

export default HomePageRooms;
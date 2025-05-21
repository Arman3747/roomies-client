import React from 'react';
import { useLoaderData } from 'react-router';
import EachRooms from './EachRooms';

const BrowseRoommate = () => {

    const rooms = useLoaderData();

    console.log(rooms);

    return (
        <div className='max-w-[1600px] mx-auto px-4 lg:px-8 space-y-4 my-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    rooms.map(room => <EachRooms key={room._id} room={room}></EachRooms>)
                }
            </div>

        </div>
    );
};

export default BrowseRoommate;
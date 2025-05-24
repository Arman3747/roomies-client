import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import MyListingsEmpty from './MyListingsEmpty';
import MyListingsMiddle from './MyListingsMiddle';

const MyListings = () => {

    const { user } = use(AuthContext);

    const [myListingRooms, setMyListingRooms] = useState([]);
    const rooms = useLoaderData();

    useEffect(() => {
        const availableRooms = rooms.filter(room => room.email === user.email);
        setMyListingRooms(availableRooms);
    }, [])

    const handleRemainingRooms = (id) => {
        const remainingRooms = myListingRooms.filter(myList => myList._id !== id);
        setMyListingRooms(remainingRooms);
    }

    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            {
                myListingRooms.length === 0 ? <MyListingsEmpty></MyListingsEmpty> : <MyListingsMiddle handleRemainingRooms={handleRemainingRooms} myListingRooms={myListingRooms}></MyListingsMiddle>
            }

        </div>
    );
};

export default MyListings;
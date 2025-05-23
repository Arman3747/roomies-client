import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import MyListingsEmpty from './MyListingsEmpty';
import MyListingsMiddle from './MyListingsMiddle';

const MyListings = () => {

    const { user } = use(AuthContext);

    const [myListingRooms, setMyListingRooms] = useState([]);
    const rooms = useLoaderData();

    console.log("rooms", rooms);

    useEffect(() => {

        const availableRooms = rooms.filter(room => room.email === user.email);
        if (availableRooms.length > 6) {
            const displayRooms = availableRooms.slice(0, 6);
            setMyListingRooms(displayRooms);
        }
        else {
            setMyListingRooms(availableRooms);
        }
    }, [])

    console.log("showRooms", myListingRooms);

    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            {
                myListingRooms.length === 0 ? <MyListingsEmpty></MyListingsEmpty> : <MyListingsMiddle myListingRooms={myListingRooms}></MyListingsMiddle>
            }

        </div>
    );
};

export default MyListings;
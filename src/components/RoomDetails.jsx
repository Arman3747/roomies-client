import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import ErrorPage from './ErrorPage';
import RoomDetailsEach from './RoomDetailsEach';

const RoomDetails = () => {

    const room = useLoaderData();
    const { id } = useParams();

    return (
        <div>
            {
                room._id === id ? <RoomDetailsEach room={room}></RoomDetailsEach>  : <ErrorPage></ErrorPage> 
            }
        </div>
    );
};

export default RoomDetails;








{/* <button
                            className="my-8 w-full py-4 text-lg font-semibold rounded-full border-2 cursor-pointer hover:underline hover:bg-white hover:cursor-pointer bg-[#00697710] border-[#006977] text-[#006977]">
                            View Details
                        </button>
                  

                    <button
                        className="my-8 w-full py-4 text-lg font-semibold rounded-full border-2 cursor-pointer hover:underline hover:bg-white hover:cursor-pointer bg-[#00697710] border-[#006977] text-[#006977]">
                        Delete
                    </button> */}

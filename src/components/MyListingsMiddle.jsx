import React, { use } from 'react';
import MyListing from './MyListing';
import { AuthContext } from '../provider/AuthProvider';

const MyListingsMiddle = ({myListingRooms , handleRemainingRooms}) => {

    const { color } = use(AuthContext);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className={`${color ? "text-[#2F3A4A]" : "text-white"}`}>
                        <th>Location</th>
                        <th>Title</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        myListingRooms.map(myListingRoom => <MyListing key={myListingRoom._id} handleRemainingRooms={handleRemainingRooms} myListingRoom={myListingRoom}> </MyListing>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyListingsMiddle;
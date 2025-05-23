import React from 'react';
import MyListing from './MyListing';

const MyListingsMiddle = ({myListingRooms}) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Title</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        myListingRooms.map(myListingRoom => <MyListing key={myListingRoom._id} myListingRoom={myListingRoom}> </MyListing>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyListingsMiddle;
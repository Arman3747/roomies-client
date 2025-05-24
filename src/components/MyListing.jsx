import React, { use } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const MyListing = ({ myListingRoom, handleRemainingRooms }) => {

    const { color } = use(AuthContext);
    const { _id, picture, title, location, rent, availability } = myListingRoom;

    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://roomies-server-seven.vercel.app/roommates/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            handleRemainingRooms(_id);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your room has been deleted !",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={picture}
                                alt="house picture" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{location}</div>
                        <div className="text-sm opacity-50">Rent : ${rent}</div>
                    </div>
                </div>
            </td>
            <td>
                {title}
                <br />
                <span className="badge badge-ghost badge-sm"> Free: {availability}</span>
            </td>
            <td>
                <Link to={`/updateRoommate/${_id}`}>
                    <button
                        className={`btn  ${color ? "btn-neutral btn-outline" : " btn-neutral"}`}>
                        Edit
                    </button>
                </Link>
            </td>
            <th>
                <button onClick={() => handleDelete(_id)}
                    className={`btn hover:text-white ${color ? "btn-error btn-outline" : "btn-error"}`}>
                    Delete
                </button>
            </th>
        </tr>
    );
};

export default MyListing;
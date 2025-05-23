import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyListing = ({ myListingRoom }) => {

    const { _id, title, location, rent, availability } = myListingRoom;

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
                fetch(`http://localhost:3000/roommates/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
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
                                src="https://i.ibb.co/23hDTvmC/roomies-icon.png"
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
                <span className="badge badge-ghost badge-sm"> Availability: {availability}</span>
            </td>
            <td>
                <Link to={`/updateRoommate/${_id}`}>
                    <button
                        className="btn btn-neutral btn-outline">
                        Edit
                    </button>
                </Link>
            </td>
            <th>
                <button onClick={() => handleDelete(_id)}
                    className="btn btn-error btn-outline hover:text-white">
                    Delete
                </button>
            </th>
        </tr>
    );
};

export default MyListing;
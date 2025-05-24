import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2'

const EachRooms = ({ room }) => {

    const { _id, title, location, rent, picture, availability } = room;

    // const handleDelete = (_id) => {
    //     // console.log(_id);
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`http://localhost:3000/roommates/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.deletedCount) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your room has been deleted !",
    //                             icon: "success"
    //                         });
    //                     }
    //                 })
    //         }
    //     });
    // }

    return (
        <div className='border-2 p-4 rounded-2xl'>
            <div className='flex flex-col lg:flex-row items-center gap-10 px-20px'>
                <div className='w-[240px] border-3 rounded-2xl border-[#00697720]'>
                    <img className='w-[230px] h-[230px] object-cover rounded-2xl' src={picture} alt="" />
                </div>

                <div className='flex-1'>
                    <h3 className='text-2xl font-semibold mb-4'>{title}</h3>
                    <h4 className='text-xl font-medium mb-4'>Location: {location}</h4>

                    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2'>
                        <p className='text-xl font-medium mb-4'>Rent: $ {rent} / week</p>
                        <p className='text-xl font-medium mb-4'>Available: {availability}  </p>
                    </div>

                    <Link to={`/roomDetails/${_id}`}>
                        <button
                            className="my-8 w-full py-4 text-lg font-semibold rounded-full border-2 cursor-pointer hover:underline hover:bg-white hover:cursor-pointer bg-[#00697710] border-[#006977] text-[#006977]">
                            View Details
                        </button>
                    </Link>

                    {/* <button onClick={() => handleDelete(_id)}
                        className="my-8 w-full py-4 text-lg font-semibold rounded-full border-2 cursor-pointer hover:underline hover:bg-white hover:cursor-pointer bg-[#00697710] border-[#006977] text-[#006977]">
                        Delete
                    </button> */}

                </div>
            </div>
        </div>
    );
};

export default EachRooms;
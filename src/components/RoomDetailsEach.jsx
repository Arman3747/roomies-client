import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const RoomDetailsEach = ({ room }) => {

    // Failed to load resource: the server responded with a status of 500 (Internal Server Error)

    const { _id, title, location, rent, type, lifestyle, description, contact,picture, availability, email, name } = room;

    // const handleDelete = (_id) => {

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
        <div>
            <div className='max-w-[1600px] mx-auto px-4 lg:px-8 space-y-4 my-8' >

                <div className='flex flex-col gap-10 px-8px'>

                    <div className='flex flex-col lg:flex-row justify-center items-center gap-8 mx-auto'>
                        <div className='border-3 rounded-2xl border-[#00697720]'>
                            <img className='w-[360px] h-[360px] object-cover rounded-2xl' src={picture} alt="" />
                        </div>

                        <div className='flex-1'>
                            <h3 className='text-5xl font-semibold mb-4 text-center'>{title}</h3>
                            <h4 className='text-3xl font-medium mb-4 text-center'>Location: {location}</h4>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between w-11/12 lg:w-10/12 mx-auto items-center '>
                        <h3 className='text-2xl font-medium mb-4'>Rent: $ {rent} / week</h3>
                        <h3 className='text-2xl font-medium mb-4'>Type: {type}</h3>
                        <h3 className='text-2xl font-medium mb-4'>Available: {availability}</h3>
                    </div>

                    <div>
                        <h3 className='text-2xl font-medium mb-4 w-11/12 lg:w-10/12 mx-auto text-justify'>Description: {description}  </h3>
                    </div>

                    <div className='flex flex-row justify-around w-11/12 lg:w-10/12 mx-auto items-center gap-4'>
                        {/* {lifestyle} */}
                        {
                            lifestyle.map(eachLifeStyle => <button className='btn btn-neutral btn-dash'>{eachLifeStyle}</button>)
                        }

                    </div>

                    <div className='flex flex-col lg:flex-row justify-between w-11/12 lg:w-10/12 mx-auto items-center '>
                        <h3 className='text-2xl font-medium mb-4'>Contact: {contact}  </h3>
                        <h3 className='text-2xl font-medium mb-4'>Email: {email}  </h3>
                        <h3 className='text-2xl font-medium mb-4'>Name: {name}  </h3>
                    </div>

                    {/* <div className='flex justify-between items-center w-11/12 lg:w-10/12 mx-auto'>
                        <div></div>
                        <Link to={`/updateRoommate/${_id}`}>
                            <button
                                className="px-16 py-4 text-2xl font-semibold rounded-md border-2 cursor-pointer bg-white hover:cursor-pointer hover:bg-[#00697710] border-[#006977] text-[#006977]">
                                Edit
                            </button>
                        </Link>

                        <button onClick={() => handleDelete(_id)}
                            className="px-16 py-4 text-2xl font-semibold rounded-md border-2 cursor-pointer hover:bg-red-50 hover:cursor-pointer bg-white border-red-500 text-red-500 hover:text-red-600">
                            Delete
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default RoomDetailsEach;
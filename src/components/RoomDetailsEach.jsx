import React from 'react';
import { use } from 'react';
import { useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const RoomDetailsEach = ({ room }) => {

    const { user } = use(AuthContext);
    console.log(user.email);

    // Failed to load resource: the server responded with a status of 500 (Internal Server Error)

    const { _id, likeCount, likedUsers, title, location, rent, type, lifestyle, description, contact, picture, availability, email, name } = room;

    const [likeCountTotal, setLikeCountTotal] = useState(likeCount);
    const [likedUsersList, setLikedUsersList] = useState(likedUsers);

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

    const handleLikeClick = () => {

        if (user.email !== email) {
            const newCount = likeCountTotal + 1;
            setLikeCountTotal(newCount);

            const newUser = user.email;

            let updatedLikedUsersList = likedUsersList;

            if (!likedUsersList.includes(newUser)) {
                updatedLikedUsersList = [...likedUsersList, newUser];
                setLikedUsersList(updatedLikedUsersList);
            }

            const countInfo = {
                likeCount: newCount,
                likedUsers: updatedLikedUsersList,
            }

            // update last sign in time
            fetch(`http://localhost:3000/roommates/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(countInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('after update patch', data)
                })
        }
    }

    return (
        <div>
            <div className='max-w-[1600px] mx-auto px-4 lg:px-8 space-y-4 my-8' >

                <div className='flex flex-col gap-10 px-8px'>

                    <div className='flex justify-center items-center'>
                        <h3 className='text-2xl font-medium mb-4'> {likeCountTotal} times the post was liked. </h3>
                    </div>

                    <div className='flex justify-end items-center'>
                        <button onClick={handleLikeClick} className="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                            Like
                        </button>
                    </div>
                    {
                        likedUsersList.includes(user.email) ? <div className='flex justify-end items-center'>
                        <h3 className='text-2xl font-medium mb-4'>Contact: {contact}  </h3>
                    </div> : " "
                    }
                    

                    <div className='flex flex-col lg:flex-row justify-center items-center gap-8 mx-auto'>
                        <div className='border-2 rounded-2xl border-[#00697720]'>
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
                            lifestyle.map((eachLifeStyle, index) => <button key={index} className='btn btn-neutral'>{eachLifeStyle}</button>)
                        }

                    </div>

                    <div className='flex flex-col lg:flex-row justify-between w-11/12 lg:w-10/12 mx-auto items-center '>
                        {/* <h3 className='text-2xl font-medium mb-4'>Contact: {contact}  </h3> */}
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
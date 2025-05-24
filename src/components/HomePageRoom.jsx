import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const HomePageRoom = ({ showRoom }) => {

    const { color } = use(AuthContext);

    const { _id, title, picture,  location, rent, availability } = showRoom;

    return (
        <div className='border-2 p-4 rounded-2xl'>
            <div className='flex flex-col lg:flex-row items-center gap-10 px-20px'>
                <div className={`w-[230px] border-3 rounded-2xl ${color ? "border-[#00697720]" : "border-gray-500" }`}>
                    <img className='w-[230px] h-[230px] object-cover rounded-2xl' src={picture} alt="" />
                </div>

                <div className='flex-1'>
                    <h3 className='text-2xl font-semibold mb-4'>{title}</h3>
                    <h4 className='text-xl font-medium mb-4'>Location: {location}</h4>

                    <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2'>
                        <p className='text-xl font-medium mb-4'>Rent: $ {rent} / week</p>
                        <p className='text-xl font-medium mb-4'>Available: <span className='text-green-500 uppercase font-semibold'>{availability} </span>  </p>
                    </div>

                    <Link to={`/roomDetails/${_id}`}>
                        <button
                            className={`my-8 w-full py-4 text-lg font-semibold rounded-full border-2 cursor-pointer hover:underline hover:cursor-pointer  ${ color ? "hover:bg-white  bg-[#00697710] border-[#006977] text-[#006977]"  : "bg-gray-700 border-white text-white" }`}>
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePageRoom;
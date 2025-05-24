import React from 'react';
import { Link } from 'react-router';

const SignUpButtons = () => {

    return (
        <div className='flex justify-center items-center gap-6'>
            <Link to="/register">
                <button className='mr-6 border-2 border-[#006977] hover:underline hover:cursor-pointer font-bold text-xl text-white px-6 py-3 rounded-sm bg-[#006977]'>Register</button>
            </Link>

            <Link to="/login">
                <button className='hover:underline hover:text-white hover:cursor-pointer hover:bg-[#2F3A4A] font-bold text-xl text-[#2F3A4A] px-6 py-3 rounded-sm bg-white border-2'>Log in</button>
            </Link>
        </div>
    );
};

export default SignUpButtons;
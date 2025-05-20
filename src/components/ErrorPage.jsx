import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='mb-16'>
            <div className='max-w-[1600px] mx-auto p-4 lg:px-[160px]'>
                <div className='flex flex-col justify-center items-center gap-20 mt-20'>
                    <h1 className='font-bold text-7xl lg:text-9xl text-red-500'>404</h1>
                    <h3 className='font-bold text-4xl lg:text-5xl'>Page Not Available !</h3>
                    <p className='font-semibold text-2xl'>Sorry, this page isn’t available <br /> anymore or an error occured.</p>
                    <p className='font-semibold text-3xl'>Please Go to <Link className='border-b-2 border-[#0089DC] hover:border-[#172C40] hover:text-white hover:bg-[#172C40]' to="/">Home</Link> page !</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
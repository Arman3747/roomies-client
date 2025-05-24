import React from 'react';
import { Link } from 'react-router';
import Lottie from "lottie-react";
import pageNotFound from "../assets/pageNotFound.json"
import { AuthContext } from '../provider/AuthProvider';

const ErrorPage = () => {
    return (
        <div className='mb-16'>
            <div className='max-w-[1600px] mx-auto p-4 lg:px-[10px]'>
                <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
                    <div className='flex flex-col justify-center items-center gap-20 mt-20 w-full lg:w-1/2'>
                        <h1 className='font-bold text-7xl lg:text-9xl text-red-500'>404</h1>
                        <h3 className='font-bold text-4xl lg:text-5xl'>Page Not Available !</h3>
                        <p className='font-semibold text-2xl'>Sorry, this page isn’t available <br /> anymore or an error occured.</p>
                        <p className='font-semibold text-3xl'>Please Go to <Link className='border-b-2 border-[#5ebc67] hover:border-[#5ebc67] hover:text-white hover:bg-[#5ebc67]' to="/">Home</Link> page !</p>
                    </div>

                    <div className='w-full lg:w-1/2'>

                        <Lottie animationData={pageNotFound} />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;
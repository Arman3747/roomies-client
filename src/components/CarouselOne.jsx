import React from 'react';

import Lottie from "lottie-react";
import couchSitting from "../assets/Couch.json"

const CarouselOne = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center my-4 lg:my-20 p-2  md:p-8 lg:p-16'>
            <div className='w-full lg:w-1/2'>

                <h2 className='text-5xl font-bold mb-8'>Find the Perfect Roommate to Binge Your Favorite Shows With</h2>

                <h3 className='text-2xl font-semibold mb-6 text-justify'> Find a roommate who loves hanging out, watching TV, and sharing chill nights filled with laughs, movies, and great company.</h3>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg font-medium text-justify'>Match with roommates who share your taste in shows, movies, and snacks</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg font-medium text-justify'>Connect over game nights, movie marathons, and cozy couch hangouts</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg font-medium text-justify'>Enjoy chill evenings with people who love staying in as much as you do</div>
                </div>
            </div>

            <div className='w-full lg:w-1/2'>

                <Lottie animationData={couchSitting} />

            </div>
        </div>
    );
};

export default CarouselOne;
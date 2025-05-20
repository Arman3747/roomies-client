import React from 'react';
import Lottie from "lottie-react";
import bowlingPlaying from "../assets/bowling.json"

const CarouselThree = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center my-4 lg:my-20 p-2  md:p-8 lg:p-16'>

            <div className='w-full lg:w-1/2'>

                <h2 className='text-5xl font-bold mb-8'>Roommates Who Love to Explore and Chill</h2>

                <h3 className='text-2xl font-semibold mb-6 text-justify'>Find roommates who enjoy bowling nights, countryside getaways, camping trips, and sharing laid-back, fun adventures together.</h3>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg font-medium text-justify'>Plan weekend getaways and spontaneous road trips</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg font-medium text-justify'>Bond over outdoor fun like camping, hiking, and bowling</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg font-medium text-justify'>Create lasting memories beyond just living together</div>
                </div>
            </div>

            <div className='w-full lg:w-1/2'>

                <Lottie animationData={bowlingPlaying} />

            </div>

        </div>
    );
};

export default CarouselThree;
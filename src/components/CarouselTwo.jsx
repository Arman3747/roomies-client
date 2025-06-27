import React from 'react';
import Lottie from "lottie-react";
import foodSitting from "../assets/food.json"

const CarouselTwo = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center my-4 lg:my-20 p-2  md:p-8 lg:p-16'>



            <div className='w-full lg:w-1/2'>

                <h2 className='text-5xl font-bold mb-8'>Roommates Who Feel Like Family</h2>

                <h3 className='text-2xl font-semibold mb-6 text-justify'>Looking for more than just someone to split rent with — share meals, stories, and culture that turn dinner into meaningful moments.</h3>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg font-medium text-justify'>Share meals and try new cuisines together</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg font-medium text-justify'>Celebrate different cultures and traditions at home</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-lg font-medium text-justify'>Build friendships over food, not just bills</div>
                </div>
            </div>

            <div className='w-full lg:w-1/2'>

                <Lottie animationData={foodSitting} />

            </div>



        </div>
    );
};

export default CarouselTwo;
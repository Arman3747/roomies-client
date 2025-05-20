import React from 'react';
import Hero from '../components/Hero';
import SloganMarque from '../components/SloganMarque';


import Lottie from "lottie-react";
import paintingSitting from "../assets/painting.json"

import CarouselOne from '../components/CarouselOne';
import CarouselTwo from '../components/CarouselTwo';


//color: #2F3A4A (black) ; white ; bg - #EAEBEC; button collor - #006977  - semi - #6D7580 ; green - 5ebc67; lime -400;green 400; 
const Home = () => {

    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            <Hero></Hero>

            <SloganMarque></SloganMarque>

            <CarouselOne></CarouselOne>
            <CarouselTwo></CarouselTwo>

            <div className='flex flex-col-reverse lg:flex-row justify-between items-center my-4 lg:my-20 p-2 md:p-8 lg:p-16'>
                <div className='w-full lg:w-1/2'>

                    <h2 className='text-5xl font-bold mb-8'>Roommates for a Peaceful, Creative Home</h2>

                    <h3 className='text-2xl font-semibold mb-6 text-justify'>Enjoy quiet company with roommates who love reading, painting, and listening to music in a calm, inspiring shared space.</h3>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-lg font-medium text-justify'>Connect with fellow book lovers and creatives</div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-lg font-medium text-justify'>Share playlists, art spaces, and cozy reading nooks</div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-lg font-medium text-justify'>Embrace quiet time without feeling alone</div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>

                    <Lottie animationData={paintingSitting} />

                </div>
            </div>















        </div>
    );
};

export default Home;
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import Lottie from "lottie-react";
import hero_sitting from "../assets/hero_sitting.json"

const Hero = () => {
    return (
    <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
      <div className='w-full lg:w-1/2'>
        <h1 className='text-6xl'>
          Find Your {' '}
          <span className='block lg:hidden'><br /></span>
          <span className='font-bold text-[#5ebc67]'>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Home !', 'Roommates !', 'Apartment !', 'Roomies !', 'Housemates !', 'Sharemates !', 'Next Place !', 'Companions !']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <div className='text-5xl py-5 text-center flex mt-10'>
            <span>Find Your Nest, With the Best !!!</span>
            </div>
      </div>

      <div className='w-full lg:w-1/2'>
        <Lottie animationData={hero_sitting} />
      </div>
      
    </div>
    );
};

export default Hero;
import React from 'react';
import Hero from '../components/Hero';
import SloganMarque from '../components/SloganMarque';
import Carousel from '../components/Carousel';


//color: #2F3A4A (black) ; white ; bg - #EAEBEC; button collor - #006977  - semi - #6D7580 ; green - 5ebc67; lime -400;green 400; 
const Home = () => {

    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            <Hero></Hero>

            <SloganMarque></SloganMarque>

            <Carousel></Carousel>



















        </div>
    );
};

export default Home;
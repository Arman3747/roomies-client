import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import SloganMarque from '../components/SloganMarque';
import Carousel from '../components/Carousel';
import Faqs from '../components/Faqs';
import TotalServices from '../components/TotalServices';
import History from '../components/History';
import { useLoaderData } from 'react-router';
import HomePageRooms from '../components/HomePageRooms';


//color: #2F3A4A (black) ; white ; bg - #EAEBEC; button collor - #006977  - semi - #6D7580 ; green - 5ebc67; lime -400;green 400; 
const Home = () => {

    const [showRooms, setShowRooms] = useState([]);
    const rooms = useLoaderData();

    useEffect(() => {

        const availableRooms = rooms.filter(room => room.availability === "yes");
        if (availableRooms.length > 6) {
            const displayRooms = availableRooms.slice(0, 6);
            setShowRooms(displayRooms);
        }
        else {
            setShowRooms(availableRooms);
        }
    }, [])

    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            <Hero></Hero>

            <Carousel></Carousel>

            <HomePageRooms showRooms={showRooms}></HomePageRooms>

            <TotalServices></TotalServices>

            <SloganMarque></SloganMarque>

            <History></History>

            <Faqs></Faqs>























        </div>
    );
};

export default Home;
import React from 'react';
import './Carousel.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import CarouselOne from './CarouselOne';
import CarouselTwo from './CarouselTwo';
import CarouselThree from './CarouselThree';


const Carousel = () => {
    return (
        <div className='mb-2 lg:mb-20'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <CarouselOne></CarouselOne> </SwiperSlide>
                <SwiperSlide> <CarouselTwo></CarouselTwo> </SwiperSlide>
                <SwiperSlide> <CarouselThree></CarouselThree> </SwiperSlide>
                {/* <SwiperSlide> <CarouselFour></CarouselFour> </SwiperSlide> */}
                
            </Swiper>
        </div>
    );
};

export default Carousel;
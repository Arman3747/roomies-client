import React from 'react';
import Marquee from "react-fast-marquee";

const SloganMarque = () => {
    return (
        <div className='text-4xl my-5'>
                <Marquee pauseOnHover={true} speed={30} className='overflow-hidden flex gap-10 p-10'>
                    <p className="font-semibold pr-20">
                        Home, Together !
                    </p>

                    <p className="font-normal pr-20">
                        Discover Your Next Place !
                    </p>

                    <p className="font-semibold pr-20">
                        Your New Home Awaits !
                    </p>

                    <p className="font-normal pr-20">
                        Find People to Share Your Space !
                    </p>
  
                    <p className="font-semibold pr-20">
                        Find the Right Roomie for You !
                    </p>

                    <p className="font-normal pr-20">
                        Roommates by chance, friends by choice !
                    </p>

                    <p className="font-semibold pr-20">
                        Living together, laughing together !
                    </p>
                    
                    <p className="font-normal pr-20">
                        Roommate adventures worth remembering !
                    </p>

                    <p className="font-semibold pr-20">
                        Meet new people !
                    </p>

                     <p className="font-normal pr-20">
                        Make new friend !
                    </p>

                    <p className="font-semibold pr-20">
                        Live Better Together !
                    </p>

                    <p className="font-normal pr-20">
                        Vacation With the Right Vibes !
                    </p>
                </Marquee>
            </div>
    );
};

export default SloganMarque;
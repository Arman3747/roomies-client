import React from 'react';
import CountUp from 'react-countup';

const TotalServices = () => {
    return (
        <div>
            <h3 className='font-semibold text-7xl my-4 mb-16 text-center'>
                Average per Month in 2024
            </h3>
            <p className='font-normal text-2xl mb-16 text-justify lg:text-center'>Throughout the year, our platform saw consistent monthly growth with high visitor traffic, increasing new member registrations, strong active participation, and a vibrant flow of messages exchanged—highlighting a thriving, engaged community and the ongoing success of our digital presence.</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
                {/* 1st Visitors */}
                <div className='flex-col justify-center items-center bg-[#6D758020] py-8 rounded-lg border-2 border-[#6D7580]'>
                    <div className='w-full'>
                        <img className='w-[240px] mx-auto block' src="https://i.ibb.co/v4RpKHLx/visitors.png" alt="" />
                    </div>

                    <div className='flex-col justify-center items-center w-full'>
                        <h3 className='text-[#0F0F0F] font-bold text-5xl my-4 text-center'>
                            <CountUp start={1000} end={615500} delay={5} duration={9} />
                        </h3>
                        <p className='font-semibold text-4xl text-center'>Visitors</p>
                    </div>
                </div>

                {/* 2nd */}
                <div className='flex-col justify-center items-center bg-[#6D758020] py-8 rounded-lg border-2 border-[#6D7580]'>
                    <div className='w-full'>
                        <img className='w-[240px] mx-auto block' src="https://i.ibb.co/27J3zMMv/members.png" alt="" />
                    </div>

                    <div className='flex-col justify-center items-center w-full'>
                        <h3 className='text-[#0F0F0F] font-bold text-5xl my-4 text-center'>
                            <CountUp start={1000} end={30000} delay={2} duration={9} />
                        </h3>
                        <p className='font-semibold text-4xl text-center'>New Members</p>
                    </div>
                </div>

                {/* 3rd Active Members */}
                <div className='flex-col justify-center items-center bg-[#6D758020] py-8 rounded-lg border-2 border-[#6D7580]'>
                    <div className='w-full'>
                        <img className='w-[240px] mx-auto block' src="https://i.ibb.co/LD0Bd6ms/active.png" alt="" />
                    </div>

                    <div className='flex-col justify-center items-center w-full'>
                        <h3 className='text-[#0F0F0F] font-bold text-5xl my-4 text-center'>
                            <CountUp start={3000} end={12000} delay={2} duration={8} />
                        </h3>
                        <p className='font-semibold text-4xl text-center'>Active Members</p>
                    </div>
                </div>

                {/* 4th Message sent */}
                <div className='flex-col justify-center items-center bg-[#6D758020] py-8 rounded-lg border-2 border-[#6D7580]'>
                    <div className='w-full'>
                        <img className='w-[240px] mx-auto block' src="https://i.ibb.co/MxsZ3sx5/message.png" alt="" />
                    </div>

                    <div className='flex-col justify-center items-center w-full'>
                        <h3 className='text-[#0F0F0F] font-bold text-5xl my-4 text-center'>
                            <CountUp start={100000} end={1100000} delay={4} duration={11} />
                        </h3>
                        <p className='font-semibold text-4xl text-center'>Message Sent</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalServices;
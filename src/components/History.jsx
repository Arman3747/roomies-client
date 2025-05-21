import React from 'react';

import Lottie from "lottie-react";
import oldHistory from "../assets/history.json"

const History = () => {
    return (
        <div className='my-20'>
            <h2 className='font-bold text-5xl mb-8 '><span className='border-b-2 border-[#5ebc67]'>Our History</span></h2>
            <p className='font-normal text-3xl pb-0 mb-0'>Roomies started as a local idea and quickly grew into a nationwide platform. From serving students to becoming a leading name in shared accommodation, our journey reflects innovation, growth, and a strong commitment to helping people find the perfect roommates.</p>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-8'>
                <div className="px-8 w-full lg:w-1/2">
                    <table>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th className='border-r-2 border-[#6D758020] text-2xl px-5 py-5'>2021</th>
                                <td className='text-2xl px-5 py-5'> <span  className='text-3xl text-[#006977]'>roomies</span> was launched in a small town.</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th className='border-r-2 border-[#6D758020] text-2xl px-5 py-5'>2022</th>
                                <td className='text-2xl px-5 py-5'> <span  className='text-3xl text-[#006977]'>roomies</span> start to offer services to university students.</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th className='border-r-2 border-[#6D758020] text-2xl px-5 py-5'>2023</th>
                                <td className='text-2xl px-5 py-5'><span  className='text-3xl text-[#006977]'>roomies</span> launched all over the whole country.</td>
                            </tr>
                            <tr>
                                <th className='border-r-2 border-[#6D758020] text-2xl px-5 py-5'>2024</th>
                                <td className='text-2xl px-5 py-5'> <span  className='text-3xl text-[#006977]'>roomies</span> becomes the largest specialized share accommodation website.</td>
                            </tr>

                            <tr>
                                <th className='border-r-2 border-[#6D758020] text-2xl px-5 py-5'>2025</th>
                                <td className='text-2xl px-5 py-5'> <span  className='text-3xl text-[#006977]'>roomies</span> hits 2 million visits in a month for the first time.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='w-full lg:w-1/2'>
                    <Lottie animationData={oldHistory} />
                </div>
            </div>
        </div>
    );
};

export default History;
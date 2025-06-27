import React from 'react';

const AboutUs = () => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            <div className='py-16'>
                <h1 className='text-5xl font-bold'><span className='border-b-2 border-[#5ebc67]'>Who We Are & What We Do</span></h1>
                {/* <div className="divider divider-success"></div> */}
                <br />
                <p className='text-2xl text-justify'>
                    Roomies is a modern, community-centered platform that connects individuals seeking to rent or offer rooms and homes. Whether you're a homeowner looking to fill a space or a student searching for affordable accommodation, Roomies is designed to make the process easy, safe, and efficient.
                </p>
                <br />
                <br />

                <h1 className='text-5xl font-bold'><span className='border-b-2 border-[#5ebc67]'>Our Mission</span></h1>
                <br />
                <p className='text-2xl text-justify'>

                    Our mission is to build a safe, inclusive, and easy-to-use platform that helps people find reliable rental solutions. Roomies is committed to promoting trust, transparency, and user satisfaction across every interaction on our site.
                </p>
                <br />
                <br />

                <h1 className='text-5xl font-bold'><span className='border-b-2 border-[#5ebc67]'>Why Choose Roomies?</span></h1>
                <br />

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>List or search for rentals with ease</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>Filter options by price, location, amenities, and more</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>Verified users and secure profiles</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>Fully mobile-responsive for on-the-go access</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>Easy communication between renters and listers</div>
                </div>

                <div className='flex gap-2 mb-2'>
                    <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                    <div className='text-2xl'>A growing and diverse rental community</div>
                </div>
                <br />
                <br />

                <h1 className='text-5xl font-bold'><span className='border-b-2 border-[#5ebc67]'>Our Team</span></h1>
                <br />
                <p className='text-2xl text-justify'>Roomies was founded by a team of tech-savvy creators who are passionate about solving real-world housing challenges. With a strong focus on user feedback, continuous updates, and inclusive values, we strive to make Roomies the go-to platform for room rentals and shared housing.</p>

            </div>
        </div>
    );
};

export default AboutUs;
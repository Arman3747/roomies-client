import React from 'react';

const Conditions = () => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            <div className='py-16'>
                <h1 className='text-5xl font-bold mb-8'>
                    <span className='border-b-2 border-[#5ebc67]'>Terms and Conditions</span></h1>
                {/* <div className="divider divider-success"></div> */}
                <br />
                <p className='text-2xl'>
                    Welcome to roomies. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services.
                </p>
                <br />
                <br />

                <h3 className='text-4xl font-semibold mt-12 mb-4'>1. Account Responsibility</h3>
                <p className='text-2xl'>You are responsible for maintaining the confidentiality of your account information and password. Any activity under your account is your responsibility.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>2. Acceptable Use</h3>
                <p className='text-2xl'>Users must not post harmful, abusive, threatening, or illegal content. You agree not to misuse the platform or try to access unauthorized features or data.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>3. Content Ownership</h3>
                <p className='text-2xl'>Any content you share (text, images, videos) remains your own, but you grant roomies the right to display and promote it within the platform. We do not claim ownership over your original content.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>4. Termination</h3>
                <p className='text-2xl'>Roomies reserves the right to suspend or terminate accounts that violate our terms or create a harmful environment for others.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>5. Privacy Policy</h3>
                <p className='text-2xl'>We are committed to protecting your privacy. Please refer to our Privacy Policy page to learn more about how we collect, use, and protect your data.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>6. Booking and Stays</h3>
                <p className='text-2xl'>All bookings made through roomies are binding. Both room providers and guests must adhere to the booking terms, including check-in/out policies and house rules.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>7. Payments and Fees</h3>
                <p className='text-2xl'>All transactions must be processed through the platform. Roomies may charge a service fee for facilitating bookings. Users are responsible for understanding applicable fees.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>8. User Disputes</h3>
                <p className='text-2xl'>Roomies is not liable for disputes between users. However, we may assist in resolution when reported through our support system.</p>


                <h3 className='text-4xl font-semibold mt-12 mb-4'>9. Liability Disclaimer</h3>
                <p className='text-2xl'> Roomies is not liable for any loss, damage, or injury resulting from use of the platform or stays arranged through it.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>10. Contact Us</h3>
                <p className='text-2xl'>If you have any questions or concerns about these Terms and Conditions, please email us at roomies@roomies.com.</p>
            </div>
        </div>
    );
};

export default Conditions;
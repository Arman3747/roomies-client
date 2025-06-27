import React from 'react';

const Privacy = () => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            <div className='py-16'>
                <h1 className='text-5xl font-bold mb-8'>
                    <span className='border-b-2 border-[#5ebc67]'>Privacy Policy - Roomies</span></h1>
                {/* <div className="divider divider-success"></div> */}
                <br />
                <p className='text-2xl'>
                    At Roomies, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our platform.
                </p>
                <br />
                <br />

                <h3 className='text-4xl font-semibold mt-12 mb-4'>1. Information We Collect</h3>
                <p className='text-2xl'>We collect personal details such as name, email address, phone number, location, and property details when you register or post a listing.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>2. How We Use Your Information</h3>
                <p className='text-2xl'>Your data helps us provide personalized experiences, connect you with potential renters or landlords, and improve our services.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>3. Sharing of Information</h3>
                <p className='text-2xl'>We do not sell or rent your personal information. We only share data with trusted partners who assist in operating the platform.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>4. Data Security</h3>
                <p className='text-2xl'>We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>5. Cookies and Tracking</h3>
                <p className='text-2xl'>Roomies uses cookies and similar technologies to enhance user experience and analyze website traffic. You can control cookies through your browser settings.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>6. User Control</h3>
                <p className='text-2xl'>You may update, correct, or delete your personal information by accessing your account settings. You may also contact us for help.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>7. Third-Party Links</h3>
                <p className='text-2xl'>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>8. Children's Privacy</h3>
                <p className='text-2xl'>Roomies is not intended for individuals under the age of 18. We do not knowingly collect data from minors.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>9. Policy Updates</h3>
                <p className='text-2xl'>We may update this Privacy Policy occasionally. Changes will be posted on this page with an updated effective date.</p>

                <h3 className='text-4xl font-semibold mt-12 mb-4'>10. Contact Information</h3>
                <p className='text-2xl'>For any privacy-related inquiries, please contact us at support@roomies.com.</p>

            </div>
        </div>
    );
};

export default Privacy;
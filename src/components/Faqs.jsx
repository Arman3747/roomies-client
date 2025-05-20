import React from 'react';

const Faqs = () => {
    return (

        <div>

            <div className='flex flex-col lg:flex-row items-center gap-5'>
                <img className='w-[480px]' src="https://i.ibb.co/N21B081R/faqs-image.png" alt="" />

                <div>
                    <h2 className='text-5xl font-bold mb-8'>Frequently Asked Questions</h2>
                    <p className='font-normal text-2xl'>If you have a question or need some help, <br />please take a moment to read through our Frequently Asked Questions.</p>
                </div>

            </div>

            <div className='mt-10 mb-25'>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-medium text-3xl">How do I activate or edit my listing?</div>
                    <div className="collapse-content text-2xl">To edit your listing, go to My Listing, then press the edit button and make any changes you want.</div>
                </div>

                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-medium text-3xl">How do I delete my listing?</div>
                    <div className="collapse-content text-2xl">To delete your listing, go to My Listings, then press the delete button and click OK to confirm deletion.</div>
                </div>

                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-medium text-3xl">I need help or tenancy advice. </div>
                    <div className="collapse-content text-2xl">Roomies is a site that can be used for free. 
                    <br />
                    <br />
                    Upgrading allows you to contact all members, view available mobile numbers, and list multiple properties.</div>
                </div>

                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-medium text-3xl">I have not received a verification SMS?</div>
                    <div className="collapse-content text-2xl">SMS verification can take up to 30 minutes to be delivered depending on your country or provider. When you receive the code, please ensure your code is entered correctly and in full.
                    <br />
                    <br />
                    If you close the screen to enter your code, you will need to request a new code. Only the most recently requested code will work.</div>
                </div>

                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-medium text-3xl">How come people are sending me text messages or calling my phone?</div>
                    <div className="collapse-content text-2xl">As part of our upgrade service, paid members can access “verified members mobile numbers.”
                    <br />
                    <br />
                    If you do not wish for members to access your mobile number, you can change this access in account settings.</div>
                </div>
            </div>
        </div>


    );
};

export default Faqs;
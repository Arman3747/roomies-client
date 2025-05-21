import React, { use } from 'react';
import NavLinks from './NavLinks';
import SignUpButtons from './SignUpButtons';
import { AuthContext } from '../provider/AuthProvider';
import ProfilePicture from './ProfilePicture';



const NavBar = () => {

    const { user } = use(AuthContext);

    return (
        <div className='max-w-[1600px] mx-auto border-b-2 border-dashed border-[#2F3A4A] p-4'>
            <div className='flex flex-col gap-2 md:flex-row justify-between items-center sm:px-4 md:px-20 py-8'>
                <img className='h-[36px]' src="https://i.ibb.co/h3H1YWN/logo-roomies-light.png" alt="" />
                <div>
                    <NavLinks></NavLinks>
                </div>

                <div>
                    {
                        user ? <ProfilePicture></ProfilePicture> : <SignUpButtons></SignUpButtons>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
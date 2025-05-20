import React from 'react';
import logoImage from '../assets/logo_roomies_light.png'
import NavLinks from './NavLinks';
import SignUpButtons from './SignUpButtons';



const NavBar = () => {

    return (
        <div className='max-w-[1600px] mx-auto border-b-2 border-dashed border-[#2F3A4A] p-4'>
            <div className='flex flex-col gap-2 md:flex-row justify-between items-center sm:px-4 md:px-20 py-8'>
                <img className='h-[36px]' src={logoImage} alt="" />
                <div>
                    <NavLinks></NavLinks>
                </div>

                <div>
                    <SignUpButtons></SignUpButtons>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const NavLinks = () => {

    const { user, color } = use(AuthContext);
    return (
        <>
            <NavLink className={`mr-8 text-2xl hover:underline decoration-2 ${ color ? "decoration-[#006977]" : "decoration-white" }`} to="/">Home</NavLink>

            {
                user ? <NavLink className={`mr-8 text-2xl hover:underline decoration-2 ${ color ? "decoration-[#006977]" : "decoration-white" }`} to="/addRoommate">Add</NavLink> : " "
            }
            

            <NavLink className={`mr-8 text-2xl hover:underline decoration-2 ${ color ? "decoration-[#006977]" : "decoration-white" }`} to="/browseRoommate">Browse</NavLink>

            {
                user ? <NavLink className={`mr-8 text-2xl hover:underline decoration-2 ${ color ? "decoration-[#006977]" : "decoration-white" }`} to="/myListings">My Listings</NavLink> : " "
            }

            <NavLink className={`mr-8 text-2xl hover:underline decoration-2 ${ color ? "decoration-[#006977]" : "decoration-white" }`} to="/terms">Terms and Conditions</NavLink>
            <NavLink className={`mr-8 text-2xl hover:underline decoration-2 ${ color ? "decoration-[#006977]" : "decoration-white" }`} to="/privacy">Privacy Policy</NavLink>
            <NavLink className={`mr-8 text-2xl hover:underline decoration-2 ${ color ? "decoration-[#006977]" : "decoration-white" }`} to="/aboutUs">About Us</NavLink>
            
        </>
    );
};

export default NavLinks;
import React from 'react';
import { NavLink } from 'react-router';

const NavLinks = () => {
    return (
        <>
            <NavLink className="mr-8 text-2xl hover:underline decoration-2 decoration-[#006977]" to="/">Home</NavLink>
            <NavLink className="mr-8 text-2xl hover:underline decoration-2 decoration-[#006977]" to="/addRoommate">Find</NavLink>
            <NavLink className="mr-8 text-2xl hover:underline decoration-2 decoration-[#006977]" to="/browseRoommate">Browse</NavLink>
            <NavLink className="mr-8 text-2xl hover:underline decoration-2 decoration-[#006977]" to="/myListings">My Listings</NavLink>
        </>
    );
};

export default NavLinks;
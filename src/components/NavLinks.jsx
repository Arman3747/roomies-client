import React from 'react';
import { NavLink } from 'react-router';

const NavLinks = () => {
    return (
        <>
            <NavLink className="mr-8 text-2xl hover:underline decoration-2 decoration-[#006977]" to="/">Home</NavLink>
            <NavLink className="mr-8 text-2xl hover:underline decoration-2 decoration-[#006977]" to="/find">Find</NavLink>
            <NavLink className="mr-8 text-2xl hover:underline decoration-2 decoration-[#006977]" to="/browseListing">Browse Listing</NavLink>
            <NavLink className="mr-8 text-2xl hover:underline decoration-2 decoration-[#006977]" to="/myListings">My Listings</NavLink>
        </>
    );
};

export default NavLinks;
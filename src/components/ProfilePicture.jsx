import React, { use } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const ProfilePicture = () => {

    const navigate = useNavigate();

    const { user, logOut } = use(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
            }).catch((error) => {
                toast.error(`ERROR - ${error.message} `);
            });
    }

    return (
        <div className="dropdown dropdown-center md:dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
                <img className='w-[36px] rounded-full border-2 border-[#0089DC]' src={`${user.photoURL ? user.photoURL : "https://i.ibb.co/vC75zQ0Y/picture.png"}`} alt="" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><p>{user.displayName ? user.displayName : "¯\\_(ツ)_/¯"}</p></li>
                <li><p onClick={handleLogOut}>Logout</p></li>
            </ul>
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default ProfilePicture;
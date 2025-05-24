import React, { use } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip';


const ProfilePicture = () => {

    const navigate = useNavigate();
    const { user, logOut, color } = use(AuthContext);

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

                <img id="tooltipHover" className={`w-[40px] h-[40px] rounded-full border-2 ${color ? 'border-[#006977]' : 'border-white' } `} src={`${user.photoURL ? user.photoURL : "https://i.ibb.co/vC75zQ0Y/picture.png"}`} alt="" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                {/* <li><p>{user.displayName ? user.displayName : "¯\\_(ツ)_/¯"}</p></li> */}
                <li><p className='btn btn-error btn-outline hover:text-white' onClick={handleLogOut}>Logout</p></li>
            </ul>
            <ToastContainer autoClose={2000} />
            <Tooltip anchorSelect="#tooltipHover" place="left">
                {user.displayName}
            </Tooltip>
        </div>
    );
};

export default ProfilePicture;
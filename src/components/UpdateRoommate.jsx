import React, { use, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const UpdateRoommate = () => {

    const { color } = use(AuthContext);
    const navigate = useNavigate();
    const room = useLoaderData();

    const { _id, title, location, rent, type, lifestyle, description, contact, picture, availability, email, name } = room;

    const [isAvailable, setIsAvailable] = useState(availability === "yes" ? true : false);

    const myDetails = { availability: isAvailable ? "yes" : "no", };

    const [lifestyleList, setLifestyleList] = useState(lifestyle);

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        setLifestyleList((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
    };

    const handleEditRoommate = e => {
        e.preventDefault();

        const form = e.target;

        const title = form.title.value;
        const location = form.location.value;
        const rent = form.rent.value;
        const type = form.type.value;
        // const lifestyle = form.lifestyle.value;
        const description = form.description.value;
        const contact = form.contact.value;
        const picture = form.picture.value;
        // const availability = form.availability.value;

        const updatedRoom = {
            title,
            location,
            rent,
            type,
            lifestyle:lifestyleList,
            description,
            contact,
            picture,
        };

        Object.assign(updatedRoom, myDetails);

        //updated DB
        fetch(`https://roomies-server-seven.vercel.app/roommates/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedRoom),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Room Updated Successfully !",
                        showConfirmButton: true,
                    })
                    .then((result) => {
                        if (result.isConfirmed) {
                            navigate("/myListings");
                        }
                    });
                }
            })
    }

    return (
        <div className='max-w-[1600px] mx-auto py-20 flex justify-center items-center'>
            <div className={`card w-full max-w-sm shrink-0 shadow-2xl ${color? "text-[#2F3A4A]" : "text-white" }`}>
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center">Update Room !</h1>
                    <form onSubmit={handleEditRoommate} className="fieldset">

                        <label className={`label ${color? "text-[#2F3A4A]" : "text-white" }`}>Title</label>
                        <input type="text" name='title' defaultValue={title} className={`input ${color ? "text-[#2F3A4A]" : "text-[#2F3A4A] placeholder-[#2F3A4A50]" }`} placeholder="Looking for a roommate in NYC" required />

                        <label className={`label ${color? "text-[#2F3A4A]" : "text-white" }`}>Location</label>
                        <input type="text" name='location' defaultValue={location} className={`input ${color ? "text-[#2F3A4A]" : "text-[#2F3A4A] placeholder-[#2F3A4A50]" }`} placeholder="eg. NYC" required />

                        <label className={`label ${color? "text-[#2F3A4A]" : "text-white" }`}>Rent Amount</label>
                        <input type="text" name='rent' defaultValue={rent} className={`input ${color ? "text-[#2F3A4A]" : "text-[#2F3A4A] placeholder-[#2F3A4A50]" }`} placeholder="$ Amount" required />

                        <label className={`label ${color? "text-[#2F3A4A]" : "text-white" }`}>Room Type</label>
                        <input type="text" name='type' defaultValue={type} className={`input ${color ? "text-[#2F3A4A]" : "text-[#2F3A4A] placeholder-[#2F3A4A50]" }`} placeholder="Single / Shared" required />

                        <label className={`label ${color? "text-[#2F3A4A]" : "text-white" }`}>Lifestyle Preferences</label>

                        {/* start preference */}

                        <label className={`label ${color? "text-[#2F3A4A]" : "text-white" }`}>
                            <input type="checkbox" 
                            className="checkbox checkbox-neutral" 
                            value="No pets"
                            defaultChecked={lifestyle.includes("No pets")}
                            onChange={handleCheckboxChange}
                            />
                            No pets
                        </label>

                         <label className={`label ${color? "text-[#2F3A4A]" : "text-white" }`}>
                            <input type="checkbox" 
                            className="checkbox checkbox-neutral" 
                            value="Non Smokers"
                            defaultChecked={lifestyle.includes("Non Smokers")}
                            onChange={handleCheckboxChange}
                            />
                            Non Smokers
                        </label>

                        <label className={`label ${color? "text-[#2F3A4A]" : "text-white" }`}>
                            <input type="checkbox" 
                            className="checkbox checkbox-neutral" 
                            value="Night Owl"
                            defaultChecked={lifestyle.includes("Night Owl")}
                            onChange={handleCheckboxChange}
                            />
                            Night Owl
                        </label>
                        
                        {/* end preference */}

                        {/* <input type="text" name='lifestyle' defaultValue={lifestyle} className="input" placeholder="Pets, Smoking, Night Owl, etc." required /> */}

                        <label className={`label ${color? "text-[#2F3A4A]" : "text-white" }`}>Description</label>
                        <textarea name='description' defaultValue={description} className={`textarea h-36  ${color ? "text-[#2F3A4A]" : "text-[#2F3A4A] placeholder-[#2F3A4A50]" }`} placeholder="Description (50 word max)" required ></textarea>

                        <label className={`label ${color? "text-[#2F3A4A]" : "text-white" }`}>Contact Info </label>
                        <input type="text" defaultValue={contact} name='contact' className={`input ${color ? "text-[#2F3A4A]" : "text-[#2F3A4A] placeholder-[#2F3A4A50]" }`} placeholder="Contact Info " required />

                        <label className={`label ${color? "text-[#2F3A4A]" : "text-white" }`}>Picture</label>
                        <input type="text" defaultValue={picture} name='picture' className={`input ${color ? "text-[#2F3A4A]" : "text-[#2F3A4A] placeholder-[#2F3A4A50]" }`} placeholder="Room Picture URL" required />

                        <label className={`label ${color? "text-[#2F3A4A]" : "text-white" }`}>Availability</label>

                        <label className="btn">
                            <input onClick={() => setIsAvailable(!isAvailable)} name='availability' type="checkbox" defaultChecked={isAvailable === true} className="toggle" />
                            {isAvailable ? "Available" : <span className='text-gray-500'>"Not Available"</span>}
                        </label>

                        {/* <input type="text" defaultValue={availability} name='availability' className="input" placeholder=" yes or no " required /> */}

                        <label className={`label ${color? "text-[#2F3A4A]" : "text-white" }`}>Email</label>
                        <input type="email" name='email' defaultValue={email} className="input cursor-not-allowed" placeholder="Email" disabled />

                        <label className={`label ${color? "text-[#2F3A4A]" : "text-white" }`}>Name</label>
                        <input type="text" name='name' defaultValue={name} className="input cursor-not-allowed" placeholder="Name" disabled />

                        <button type='submit' className="btn bg-[#006977] text-white mt-4">Update !</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateRoommate;
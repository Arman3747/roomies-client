import React, { use, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';

const AddRoommate = () => {

    const navigate = useNavigate();
    const { user, color } = use(AuthContext);
    // console.log(user.displayName, user.email);

    const [isAvailable, setIsAvailable] = useState(true);

    const myDetails = { name: user.displayName, email: user.email, availability: isAvailable ? "yes" : "no", };

    const [lifestyleList, setLifestyleList] = useState([]);

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        setLifestyleList((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
    };

    const clearLifestyleSelection = () => {
        setLifestyleList([]);

        const checkboxOne = document.getElementById("myInputOne");
        checkboxOne.defaultChecked = false;
        checkboxOne.checked = false;

        const checkboxTwo = document.getElementById("myInputTwo");
        checkboxTwo.defaultChecked = false;
        checkboxTwo.checked = false;

        const checkboxThree = document.getElementById("myInputThree");
        checkboxThree.defaultChecked = false;
        checkboxThree.checked = false;

        setIsAvailable(true);
        const radioButton = document.getElementById("radioOne");
        radioButton.defaultChecked = true;
        radioButton.checked = true;
    };
    // console.log(lifestyleList);

    const handleAddRoommate = (e) => {
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
        const likeCount = 0;
        const likedUsers = [];

        const newRoommate = {
            title,
            location,
            rent,
            type,
            lifestyle: lifestyleList,
            description,
            contact,
            picture,
            likeCount,
            likedUsers,
        };

        Object.assign(newRoommate, myDetails);
        // console.log(newRoommate);

        //send to DB
        fetch('https://roomies-server-seven.vercel.app/roommates', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRoommate),
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your Room has been added !",
                        text: "Do you want to add more rooms ?",
                        showCancelButton: true,
                        showConfirmButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "YES, Add More rooms!"
                    }).then((result) => {
                        if (result.isConfirmed) {

                            setIsAvailable(true);
                            clearLifestyleSelection();
                            form.title.value = "";
                            form.location.value = "";
                            form.rent.value = "";
                            form.type.value = "";
                            form.description.value = "";
                            form.contact.value = "";
                            form.picture.value = "";

                            navigate("/addRoommate");
                        }
                        else {
                            navigate("/myListings");
                        }
                    });


                }
            })

    }

    return (
        <div className='max-w-[1600px] mx-auto py-20 flex justify-center items-center'>
            <div className={`card w-full max-w-sm shrink-0 shadow-2xl ${color ? "text-[#2F3A4A]" : "text-white"}`}>
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center">Add Room !</h1>
                    <form onSubmit={handleAddRoommate} className="fieldset">

                        <label className={`label ${color ? "text-[#2F3A4A]" : "text-white"}`}>Title</label>
                        <input type="text" name='title' className={`input ${color ? "text-[#2F3A4A]" : "text-[#2F3A4A] placeholder-[#2F3A4A50]"}`} placeholder="Looking for a roommate in NYC" required />

                        <label className={`label ${color ? "text-[#2F3A4A]" : "text-white"}`}>Location</label>
                        <input type="text" name='location' className={`input ${color ? "text-[#2F3A4A]" : "text-[#2F3A4A] placeholder-[#2F3A4A50]"}`} placeholder="eg. NYC" required />

                        <label className={`label ${color ? "text-[#2F3A4A]" : "text-white"}`}>Rent Amount</label>
                        <input type="text" name='rent' className={`input ${color ? "text-[#2F3A4A]" : "text-[#2F3A4A] placeholder-[#2F3A4A50]"}`} placeholder="$ Amount" required />

                        <label className={`label ${color ? "text-[#2F3A4A]" : "text-white"}`}>Room Type</label>
                        <input type="text" name='type' className={`input ${color ? "text-[#2F3A4A]" : "text-[#2F3A4A] placeholder-[#2F3A4A50]"}`} placeholder="Single / Shared" required />

                        <label className={`label ${color ? "text-[#2F3A4A]" : "text-white"}`}>Lifestyle Preferences</label>

                        {/* start preference */}

                        <label className={`label ${color ? "text-[#2F3A4A]" : "text-white"}`}>
                            <input id="myInputOne" type="checkbox"
                                className="checkbox checkbox-neutral"
                                value="No pets"
                                onChange={handleCheckboxChange}
                            />
                            No pets
                        </label>

                        <label className={`label ${color ? "text-[#2F3A4A]" : "text-white"}`}>
                            <input id="myInputTwo" type="checkbox"
                                className="checkbox checkbox-neutral"
                                value="Non Smokers"
                                onChange={handleCheckboxChange}
                            />
                            Non Smokers
                        </label>

                        <label className={`label ${color ? "text-[#2F3A4A]" : "text-white"}`}>
                            <input id="myInputThree" type="checkbox"
                                className="checkbox checkbox-neutral"
                                value="Night Owl"
                                onChange={handleCheckboxChange}
                            />
                            Night Owl
                        </label>

                        {/* end preference */}
                        {/* <input type="text" name='lifestyle' className="input" placeholder="Pets, Smoking, Night Owl, etc." required /> */}

                        {/* <label className="label">Description</label>
                        <input type="text" name='description' className="input" placeholder="Description (50 word max)" required /> */}

                        <label className={`label ${color ? "text-[#2F3A4A]" : "text-white"}`}>Description</label>
                        <textarea name='description' className={`textarea h-36 ${color ? "text-[#2F3A4A]" : "text-[#2F3A4A] placeholder-[#2F3A4A50]"}`} placeholder="Description (100 word max)" required ></textarea>

                        <label className={`label ${color ? "text-[#2F3A4A]" : "text-white"}`}>Contact Info </label>
                        <input type="text" name='contact' className={`input ${color ? "text-[#2F3A4A]" : "text-[#2F3A4A] placeholder-[#2F3A4A50]"}`} placeholder="Contact Info " required />

                        <label className={`label ${color ? "text-[#2F3A4A]" : "text-white"}`}>Picture</label>
                        <input type="text" name='picture' className={`input ${color ? "text-[#2F3A4A]" : "text-[#2F3A4A] placeholder-[#2F3A4A50]"}`} placeholder="Room Picture URL" required />

                        <label className={`label ${color ? "text-[#2F3A4A]" : "text-white"}`}>Availability</label>
                        <label className="btn">
                            <input id="radioOne" onClick={() => setIsAvailable(!isAvailable)} name='availability' type="checkbox" defaultChecked className="toggle" />
                            {isAvailable ? "Available" : <span className='text-gray-500'>"Not Available"</span>}
                        </label>

                        {/* <input type="text" name='availability' className="input" placeholder=" yes or no " required /> */}

                        <label className={`label ${color ? "text-[#2F3A4A]" : "text-white"}`}>Email</label>
                        <input type="email" name='email' defaultValue={user.email} className="input cursor-not-allowed" disabled />

                        <label className={`label ${color ? "text-[#2F3A4A]" : "text-white"}`}>Name</label>
                        <input type="text" name='name' defaultValue={user.displayName} className="input cursor-not-allowed" disabled />

                        <button type='submit' className="btn bg-[#006977] text-white mt-4">Add New Rooms</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRoommate;
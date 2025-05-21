import React from 'react';
import Swal from 'sweetalert2';


const AddRoommate = () => {

    const handleAddRoommate = (e) => {
        e.preventDefault();

        const form = e.target;
        const formDate = new FormData(form);
        // console.log(formDate.entries());
        const newRoommate = Object.fromEntries(formDate.entries());
        console.log(newRoommate);


        //send to DB
        fetch('http://localhost:3000/roommates', {
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
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })

    }

    return (
        <div className='max-w-[1600px] mx-auto py-20 flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center">Add Room !</h1>
                    <form onSubmit={handleAddRoommate} className="fieldset">

                        <label className="label">Title</label>
                        <input type="text" name='title' className="input" placeholder="Looking for a roommate in NYC" required />

                        <label className="label">Location</label>
                        <input type="text" name='location' className="input" placeholder="eg. NYC" required />

                        <label className="label">Rent Amount</label>
                        <input type="text" name='rent' className="input" placeholder="$ Amount" required />

                        <label className="label">Room Type</label>
                        <input type="text" name='type' className="input" placeholder="Single / Shared" required />

                        <label className="label">Lifestyle Preferences</label>
                        <input type="text" name='lifestyle' className="input" placeholder="Pets, Smoking, Night Owl, etc." required />

                        {/* <label className="label">Description</label>
                        <input type="text" name='description' className="input" placeholder="Description (50 word max)" required /> */}

                        <label className="label">Description</label>
                        <textarea name='description' className="textarea h-36" placeholder="Description (50 word max)" required ></textarea>

                        <label className="label">Contact Info </label>
                        <input type="text" name='contact' className="input" placeholder="Contact Info " required />

                        <label className="label">Availability</label>
                        <input type="text" name='availability' className="input" placeholder=" yes or no " required />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />

                        <button type='submit' className="btn bg-[#006977] text-white mt-4">Add New Rooms</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRoommate;
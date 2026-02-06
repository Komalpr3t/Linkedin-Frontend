import React from 'react';
import { MdNotificationsActive } from "react-icons/md";
import { useSelector } from 'react-redux';

const Navbar = () => {

    const {currentUser} = useSelector((state) => state.user);

    return (
        <div className='h-20 bg-blue-900 flex justify-between px-20 items-center'>
            {/* user image */}
            <div className='flex items-center gap-4'>
                <img
                    className='w-20'
                    src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
                    alt="user_profile"
                />
                <div>
                <p className='text-white font-semibold ml-2'>{currentUser ? currentUser.email : "Guest"}</p>
                </div>
                </div>
            {/* search bar */}
            <div>
                <input className="bg-white p-3 border-2 rounded-lg outline-none border-black"
                type="text"
                placeholder="Search..."/>
            </div>

            {/* logo */}
            <div className="flex items-center gap-4">

                <div>
                    <MdNotificationsActive className="text-white cursor-pointer text-4xl"/>
                </div>

                <div>
                    <h1 className="text-white text-3xl font-semibold">LinkedIn</h1>
                </div>
                <img
                    className="w-14"
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                    alt="linkedin_logo"
                /></div>

        </div>
    )
}

export default Navbar
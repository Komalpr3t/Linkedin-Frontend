import React from 'react'
import { useSelector } from 'react-redux'
import { FaUserGroup } from "react-icons/fa6"
import { FiSettings } from "react-icons/fi"
import { MdWorkspacePremium } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const ProfileSection = () => {
    const currentUser = useSelector((state) => state.user.currentUser);

    return (
        <div className='border-black border-2 rounded-lg p-6 w-64'>

            <NavLink to="/profile">
                {/* Profile block */}
                <div className='flex items-center gap-4 mb-6'>
                    <img
                        className='w-14'
                        src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
                        alt="user_profile"
                    />

                    <div>
                        <h2 className='text-lg font-semibold leading-tight'>
                            {currentUser ? currentUser.username : "Guest User"}
                        </h2>
                        <h4 className='text-gray-500 text-sm'>
                            headline
                        </h4>
                    </div>
                </div>
            </NavLink>

            {/* Menu */}
            <ul className='text-lg font-semibold flex flex-col gap-4'>
                
                <li className='cursor-pointer flex items-center gap-3 hover:text-blue-600'>
                    <FaUserGroup />
                    <span>Profile Views</span>
                </li>

                <li className='cursor-pointer flex items-center gap-3 hover:text-blue-600'>
                    <FiSettings />
                    <span>Account Settings</span>
                </li>

                <li className='cursor-pointer flex items-center gap-3 hover:text-yellow-600'>
                    <MdWorkspacePremium />
                    <span>Upgrade to Premium</span>
                </li>

            </ul>

        </div>
    )
}

export default ProfileSection

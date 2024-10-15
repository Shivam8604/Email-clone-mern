/* eslint-disable no-unused-vars */
import React from 'react';
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';

const Navbar = () => {
    return (
        <div className='flex item-center justify-between mx-3 h-16 my-2'>
            <div className='flex items-center gap-10'>
                <div className='flex item-center gap-2'>
                    <div className='p-3 hover:bg-gray-200 rounded-full cursor-pointer '>
                        <FaBars />
                    </div>
                    <img className='w-9 h-7' src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png' alt='logo' />
                    <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
                </div>
            </div>
            <div className='w-[50%] mr-60'>
                <div className='flex item-center bg-[#EAF1FB] px-2 py-3 mt-2 rounded-full'>
                    <IoIosSearch size={'24px'} className='text-gray-700' />
                    <input type='text' placeholder='Search Mail' className='rounded-full w-full bg-transparent outline-none px-1' />
                </div>
            </div>
            <div className='flex item-center gap-2'>
                <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <CiCircleQuestion size={'24px'} />
                </div>
                <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                <IoIosSettings size={'24px'} />
                </div>
                <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                <TbGridDots  size={'24px'}/>
                </div>
                <Avatar src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' size="40" round={true} />
            </div>
        </div>
    )
}

export default Navbar

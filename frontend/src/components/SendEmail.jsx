/* eslint-disable no-unused-vars */
import React from 'react';
import { ImCross } from "react-icons/im";

const SendEmail = () => {
    return (
        <div className='bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md'>
            <div className='flex items-center justify-between px-3 bg-[#f2f6fc] py-2'>
                <h1>New Message</h1>
                <div className='p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer'>
                    <ImCross size={'20px'} />
                </div>
            </div>
            <form className='flex flex-col gap-2 ml-4 mr-4'>
                <input type='text' placeholder='to' className='outline-none'/>
                <input type='text' placeholder='subject' className='outline-none' />
                <textarea rows={'10'} cols={'30'} className='outline-none py-1 '></textarea>
            </form>
        </div>
    )
}

export default SendEmail

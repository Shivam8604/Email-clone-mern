/* eslint-disable no-unused-vars */
import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { CiStar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Email = () => {
    const navigate = useNavigate();
    const openMail = ()=>{
        navigate("/mail/1234")
    }
  return (
    <div onClick={openMail} className='flex items-center justify-between border-b border-gary-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md'>
        <div className='flex gap-2'>
            <div className='text-gray-400'>
                <MdCropSquare size={'20px'}/>
            </div>
            <div className='text-gray-400'>
                <CiStar size={'20px'}/>
            </div>
            <div>
                <h1 className='font-semibold'>shivampal</h1>
            </div>
        </div>
        <div className='flex-1 ml-4'>
            <p>Hello shivam pal  how are you today i hope you are fine to today the good news for you </p>
        </div>
        <div className='flex-none text-gray text-sm'>
            <p>12 days ago</p>
        </div>
    </div>
  )
}

export default Email

/* eslint-disable no-unused-vars */
import React from 'react';
import { IoMdStar } from 'react-icons/io';
import { LuPencil } from "react-icons/lu";
import { MdInbox, MdMore, MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from 'react-icons/tb';

const sidebarItems = [
  {
    icon: <MdInbox size={'20px'} />,
    text: "Inbox"
  },
  {
    icon: <IoMdStar size={'20px'} />,
    text: "Started"
  },
  {
    icon: <MdOutlineWatchLater size={'20px'} />,
    text: "Snoozed"
  },
  {
    icon: <TbSend2 size={'20px'} />,
    text: "Sent"
  },
  {
    icon: <MdOutlineDrafts size={'20px'} />,
    text: "Draft"
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={'20px'} />,
    text: "More"
  }
]


const Sidebar = () => {
  return (
    <div className='w-[15%]'>
      <div className='p-3'>
        <button className='flex items-center gap-2 bg-[#c2e7ff] p-4 rounded-xl'>
          <LuPencil />
          Compose
        </button>
        <div className='text-gray-600'>

          {
            sidebarItems.map((item,index)=>{
              return <>
              <div className='flex item-center  pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200'>
                  {item.icon}
                  <p>{item.text}</p>
                </div>
              </>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar

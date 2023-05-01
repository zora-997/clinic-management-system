import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdArrowRight } from "react-icons/md";
import { BiUserPin } from "react-icons/bi";



const AppointmentList = () => {
    const location = useLocation()
    return (
        <div className='w-full relative'>
            <li className={` ${location.pathname === '/appointment' && 'bg-blue-500 text-white'} mb-2 group cursor-pointer w-full items-center hover:text-white hover:bg-blue-500 duration-100 p-2.5 rounded-lg `} >
                <Link className="relative flex justify-start items-center w-full">
                    <BiUserPin size={23} className="mr-4 ml-7 " />
                    <span >Appointment</span>
                    <MdArrowRight className={` ${location.pathname === '/appointment' && 'text-white'} absolute right-0 text-white  group-hover:text-white rounded-xl`} size={20} />
                </Link>
            </li>
            <div id="tooltip-light" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip">
                Tooltip content
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    )
}

export default AppointmentList


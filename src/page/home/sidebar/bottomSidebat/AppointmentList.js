import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdArrowRight } from "react-icons/md";
import { BiUserPin } from "react-icons/bi";



const AppointmentList = ({ setShowSildBar }) => {
    const location = useLocation()
    return (
        <li onClick={() => setShowSildBar(false)} className={` ${location.pathname === '/appointment' && 'bg-blue-500 text-white'}  group cursor-pointer  items-center hover:text-white hover:bg-blue-500 duration-100 p-2.5 rounded-lg `} >
            <Link to="/appointment" className="flex justify-between items-center ">
                <div className="flex gap-3">
                    <BiUserPin size={23} className="" />
                    <span >Appointment</span>
                </div>
                <MdArrowRight className={` ${location.pathname === '/appointment' && 'text-white'}  text-white  group-hover:text-white rounded-xl`} size={20} />
            </Link>
        </li>

    )
}

export default AppointmentList


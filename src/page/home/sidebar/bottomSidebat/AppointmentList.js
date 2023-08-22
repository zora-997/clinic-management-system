import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdArrowRight } from "react-icons/md";
import { BiUserPin } from "react-icons/bi";



const AppointmentList = ({ setShowSildBar }) => {
    const location = useLocation()
    return (
        <li onClick={() => setShowSildBar(false)} className={` ${location.pathname === '/appointment' && 'bg-[#0171FE] text-white'}  group cursor-pointer  items-center hover:text-white hover:bg-[#0171FE] duration-100 p-2.5 rounded-lg `} >
            <Link to="/appointment" className="flex justify-between items-center ">
                <div className="flex gap-3 items-center">
                    <BiUserPin size={23} className="2xl:scale-125" />
                    <span className='2xl:text-xl' >Appointment</span>
                </div>
                <MdArrowRight className={` ${location.pathname === '/appointment' && 'text-white'}  text-white  group-hover:text-white rounded-xl`} size={20} />
            </Link>
        </li>

    )
}

export default AppointmentList


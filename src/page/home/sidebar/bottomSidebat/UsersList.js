import React from 'react'
import { HiOutlineUser } from 'react-icons/hi'
import { MdArrowRight } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

const UsersList = ({ setShowSildBar }) => {
    const location = useLocation()
    return (

        <li onClick={() => setShowSildBar(false)} className={`${location.pathname === '/user' && 'bg-[#0171FE] text-white'}  group cursor-pointer w-full items-center hover:text-white hover:bg-[#0171FE] duration-100 p-2.5 rounded-lg `} >
            <Link to="/user" className=" flex justify-between items-center w-full">
                <div className="flex gap-3 items-center">
                    <HiOutlineUser size={22} className="2xl:scale-125" />
                    <span className="2xl:text-xl">User</span>
                </div>
                <MdArrowRight className={` ${location.pathname === '/user' && 'text-white'} text-white  group-hover:text-white rounded-xl`} size={20} />

            </Link>

        </li>

    )
}

export default UsersList
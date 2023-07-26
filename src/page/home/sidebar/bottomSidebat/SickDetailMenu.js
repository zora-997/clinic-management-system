import React from 'react'
import { TbListDetails } from 'react-icons/tb'
import { MdArrowRight } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

const SickDetailMenu = ({ setShowSildBar }) => {
    const location = useLocation();

    return (
        <li onClick={() => setShowSildBar(false)} className={`${location.pathname === '/sickdetail' && 'bg-blue-500 text-white'} group cursor-pointer  items-center hover:text-white hover:bg-blue-500 duration-100 p-2.5 rounded-lg `} >
            <Link to="/sickdetail" className="flex justify-between items-center">
                <div className='flex gap-3'>
                    <TbListDetails size={22} />
                    <span >Sick Detail</span>
                </div>
                <MdArrowRight className={` ${location.pathname === '/sickdetail' && 'text-white'} text-white  group-hover:text-white rounded-xl`} size={20} />

            </Link>

        </li>

    )
}

export default SickDetailMenu
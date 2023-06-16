import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import GlobalContext from '../../contexts/createContext/context';

const Header = () => {
    const location = useLocation()
    const { query, setQuery } = useContext(GlobalContext)


    return (
        // fixed bka headerka awaste
        <div className=' flex justify-end w-full h-16 select-none'>
            <div className={`h-16  w-[83.6%] `}>
                <div className={`flex pt-4 justify-between items-end `}>
                    <span className={`font-medium text-2xl text-gray-600 capitalize  ml-8`}> {location.pathname.slice(1)} </span>

                    {/** search input */}

                    <div className='search flex rounded-full mr-24  bg-white/60 hover:bg-white p-1.5  w-[410px] shadow-sm '>
                        <AiOutlineSearch size={22} className="text-sky-500" />
                        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search...' className=' bg-transparent w-full focus:outline-none pl-2' />
                    </div>


                    {/** log out buuton */}
                    {location.pathname === "/dashbord" &&
                        <Link to="/login" onClick={() => { localStorage.removeItem('data'); localStorage.removeItem('doctor_id') }} className="mr-12 relative rounded-md px-5 py-1  overflow-hidden group text-red-400   hover:bg-gradient-to-r hover:from-red-300 hover:to-red-300 hover:text-white transition-colors  ease-in duration-300">
                            <span className="absolute right-0 w-14 h-36 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Log Out</span>
                        </Link>
                    }
                </div>
            </div>
        </div>

    )
}

export default Header
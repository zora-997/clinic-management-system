import { Link, useLocation } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdArrowRight } from "react-icons/md";



const DoctorList = ({ setShowSildBar }) => {
    const location = useLocation()
    return (

        <li onClick={() => setShowSildBar(false)} className={`${location.pathname === '/doctor' && 'bg-[#0171FE] text-white'}  group cursor-pointer w-full items-center hover:text-white hover:bg-[#0171FE] duration-100 p-2.5 rounded-lg `} >
            <Link to="/doctor" className=" flex justify-between items-center w-full">
                <div className="flex gap-3 items-center">
                    <HiOutlineUserGroup size={22} className="2xl:scale-125" />
                    <span className="2xl:text-xl">Doctor</span>
                </div>
                <MdArrowRight className={` ${location.pathname === '/doctor' && 'text-white'} text-white  group-hover:text-white rounded-xl`} size={20} />

            </Link>

        </li>

    )
}

export default DoctorList
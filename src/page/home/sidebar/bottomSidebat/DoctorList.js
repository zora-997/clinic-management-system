import { Link, useLocation } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdArrowRight } from "react-icons/md";



const DoctorList = () => {
    const location = useLocation()
    return (

        <li className={`${location.pathname === '/doctor' && 'bg-blue-500 text-white'}  group cursor-pointer w-full items-center hover:text-white hover:bg-blue-500 duration-100 p-2.5 rounded-lg `} >
            <Link to="/doctor" className=" flex justify-between items-center w-full">
                <div className="flex gap-3">
                    <HiOutlineUserGroup size={22} />
                    <span >Doctor</span>
                </div>
                <MdArrowRight className={` ${location.pathname === '/doctor' && 'text-white'} text-white  group-hover:text-white rounded-xl`} size={20} />

            </Link>

        </li>

    )
}

export default DoctorList
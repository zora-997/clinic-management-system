import { HiOutlineAnnotation } from "react-icons/hi";
import { MdArrowRight } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

const SurgeryTypeList = () => {
    const location = useLocation();
    return (

        <li className={`${location.pathname === '/workingtype' && 'bg-blue-500 text-white'} cursor-pointer w-full items-center hover:text-white hover:bg-blue-500 duration-100 p-2.5 rounded-lg`}>
            <Link to="/workingtype" className="flex justify-between items-center ">
                <div className="flex gap-3">
                    <HiOutlineAnnotation size={22} />
                    <span>Working Type</span>
                </div>
                <MdArrowRight className={` ${location.pathname === '/workingtype' && 'text-white'}  text-white rounded-xl`} size={20} />

            </Link>
        </li>

    )
}

export default SurgeryTypeList
import { HiOutlineAnnotation } from "react-icons/hi";
import { MdArrowRight } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

const SurgeryTypeList = () => {
    const location = useLocation();
    return (
        <div className='w-full'>
            <li className={`${location.pathname === '/workingtype' && 'bg-blue-500 text-white'} mb-2  cursor-pointer w-full items-center hover:text-white hover:bg-blue-500 duration-100 p-2.5 rounded-lg`}>
                <Link to="/workingtype" className="flex justify-start items-center w-full relative">
                    <HiOutlineAnnotation size={22} className="mr-4 ml-7" />
                    <span>Working Type</span>
                    <MdArrowRight className={` ${location.pathname === '/workingtype' && 'text-white'} absolute right-0 text-white rounded-xl`} size={20} />

                </Link>
            </li>
        </div>
    )
}

export default SurgeryTypeList
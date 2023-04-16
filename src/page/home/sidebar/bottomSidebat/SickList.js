import { MdArrowRight } from "react-icons/md";
import { BsHeartPulse } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
const SickList = () => {
    const location = useLocation();


    return (
        <div className='w-full'>
            <li className={`${location.pathname === '/sick' && 'bg-blue-500 text-white'} mb-2  cursor-pointer w-full items-center  hover:bg-blue-500 hover:text-white duration-100  p-2.5 rounded-full`}>
                <Link to="/sick" className=" relative flex justify-start enter items-center w-full">
                    <BsHeartPulse size={23} className="mr-4 ml-7" />
                    <span >Sick</span>
                    <MdArrowRight className={` ${location.pathname === '/sick' && 'text-white'} absolute right-0 text-white  rounded-xl`} size={20} />

                </Link>
            </li>

        </div>
    )
}

export default SickList
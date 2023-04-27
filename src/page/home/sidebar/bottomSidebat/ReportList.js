import { Link, useLocation } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdArrowRight } from "react-icons/md";



const ReportList = () => {
    const location = useLocation()
    return (
        <div className='w-full'>
            <li className={`${location.pathname === '/report' && 'bg-blue-500 text-white'} mb-2 group cursor-pointer w-full items-center hover:text-white hover:bg-blue-500 duration-100 p-2.5 rounded-lg `} >
                <Link to="/report" className="relative flex justify-start items-center w-full">
                    <HiOutlineUserGroup size={22} className="mr-4 ml-7" />
                    <span >Report</span>
                    <MdArrowRight className={` ${location.pathname === '/report' && 'text-white'} absolute right-0 text-white  group-hover:text-white rounded-xl`} size={20} />

                </Link>

            </li>
        </div>
    )
}

export default ReportList
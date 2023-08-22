import { HiOutlineAnnotation } from "react-icons/hi";
import { MdArrowRight } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

const SurgeryTypeList = ({ setShowSildBar }) => {
    const location = useLocation();
    return (

        <li onClick={() => setShowSildBar(false)} className={`${location.pathname === '/workingtype' && 'bg-[#0171FE] text-white'} cursor-pointer w-full items-center hover:text-white hover:bg-[#0171FE] duration-100 p-2.5 rounded-lg`}>
            <Link to="/workingtype" className="flex justify-between items-center ">
                <div className="flex items-center gap-3">
                    <HiOutlineAnnotation size={22} className="2xl:scale-125" />
                    <span className="2xl:text-xl">Working Type</span>
                </div>
                <MdArrowRight className={` ${location.pathname === '/workingtype' && 'text-white'}  text-white rounded-xl`} size={20} />

            </Link>
        </li>

    )
}

export default SurgeryTypeList
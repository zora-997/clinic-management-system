import { MdArrowRight } from "react-icons/md";
import { BsHeartPulse } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';


const SickList = ({ setShowSildBar }) => {
    const location = useLocation();


    return (

        <li onClick={() => setShowSildBar(false)} className={`${location.pathname === '/patient' && 'bg-blue-500 text-white'}   cursor-pointer w-full items-center  hover:bg-blue-500 hover:text-white duration-100  p-2.5 rounded-lg`}>
            <Link to="/patient" className=" flex justify-between items-center ">
                <div className="flex gap-3">
                    <BsHeartPulse size={20} />
                    <span >Patient</span>
                </div>
                <MdArrowRight className={` ${location.pathname === '/patient' && 'text-white'}  text-white  rounded-xl`} size={20} />

            </Link>
        </li>


    )
}

export default SickList
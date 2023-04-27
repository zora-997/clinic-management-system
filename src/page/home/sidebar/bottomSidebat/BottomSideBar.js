import { RxDashboard } from "react-icons/rx";
import { MdArrowRight } from "react-icons/md";
import DoctorList from './DoctorList';
import SickList from './SickList';
import SurgeryTypeList from './SurgeryTypeList';
import { Link, useLocation } from "react-router-dom";
import ExpenseType from "./ExpenseType";

import ExpenseList from "./ExpenseList";
import ReportList from "./ReportList";


const BottomSideBar = () => {
    const location = useLocation()

    return (
        <div className="w-full font-body flex justify-center">
            <ul style={{ color: '#AEAEAE' }} className='mt-9 flex flex-col text-sm w-[200px] select-none'>
                <li className={`hover:text-white  ${location.pathname === '/dashbord' && 'bg-blue-500 text-white'} group  hover:bg-blue-500  mb-2 cursor-pointer w-full p-2.5  rounded-lg`} >
                    <Link to="/dashbord" className="relative flex justify-start items-center w-full">
                        <RxDashboard size={19} className="mr-4 ml-7 " />
                        <span >Dashbord</span>
                        <MdArrowRight className={` ${location.pathname === '/dashbord' && 'text-white'} absolute right-0 text-white  group-hover:text-white rounded-xl`} size={20} />

                    </Link>
                </li>
                <DoctorList />
                <SickList />
                <SurgeryTypeList />
                <ExpenseType />
                <ExpenseList />
                <ReportList />
            </ul>


        </div>
    )
}

export default BottomSideBar
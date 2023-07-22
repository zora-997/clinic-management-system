import { RxDashboard } from "react-icons/rx";
import { MdArrowRight } from "react-icons/md";
import DoctorList from './DoctorList';
import SickList from './SickList';
import SurgeryTypeList from './SurgeryTypeList';
import { Link, useLocation } from "react-router-dom";
import ExpenseType from "./ExpenseType";

import ExpenseList from "./ExpenseList";
import ReportList from "./ReportList";
import AppointmentList from "./AppointmentList";
import SickDetailMenu from "./SickDetailMenu";


const BottomSideBar = () => {
    const location = useLocation()
    const user = localStorage.getItem("data")
    let role = user && JSON.parse(user).role;

    return (

        <ul style={{ color: '#AEAEAE' }} className=' flex flex-col gap-2  text-sm w-full px-2   select-none'>
            <li className={`hover:text-white  ${location.pathname === '/main' && 'bg-blue-500 text-white'} group  hover:bg-blue-500   cursor-pointer w-full p-2.5  rounded-lg`} >
                <Link to="/main" className=" flex justify-between items-center ">
                    <div className="flex gap-3">
                        <RxDashboard size={19} />
                        <span >Main</span>
                    </div>
                    <MdArrowRight className={` ${location.pathname === '/main' && 'text-white'}  text-white  group-hover:text-white rounded-xl`} size={20} />
                </Link>
            </li>

            <AppointmentList />
            {role === "doctor" && <SickDetailMenu />}
            <DoctorList />
            <SickList />
            <SurgeryTypeList />
            <ExpenseType />
            <ExpenseList />
            <ReportList />
        </ul>


    )
}

export default BottomSideBar
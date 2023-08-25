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
import UsersList from "./UsersList";


const BottomSideBar = ({ setShowSildBar }) => {
    const location = useLocation()
    const user = localStorage.getItem("data")
    let role = user && JSON.parse(user).role;
    console.log(role);

    return (

        <ul style={{ color: '#AEAEAE' }} className=' flex flex-col  gap-2  text-sm w-full px-2   select-none'>
            <li onClick={() => setShowSildBar(false)} className={`hover:text-white  ${location.pathname === '/main' && 'bg-[#0171FE] text-white'} group  hover:bg-[#0171FE]   cursor-pointer w-full p-2.5  rounded-lg`} >
                <Link to="/main" className=" flex justify-between items-center ">
                    <div className="flex gap-3 items-center">
                        <RxDashboard size={19} className={`2xl:scale-125`} />
                        <span className=" 2xl:text-xl">Main</span>
                    </div>
                    <MdArrowRight className={` ${location.pathname === '/main' && 'text-white'}  text-white  group-hover:text-white rounded-xl`} size={20} />
                </Link>
            </li>

            {(role === "reception" || role === "admin") && <AppointmentList setShowSildBar={setShowSildBar} />}
            {role === "doctor" && <SickDetailMenu setShowSildBar={setShowSildBar} />}
            {role === "admin" && <DoctorList setShowSildBar={setShowSildBar} />}
            {(role === "reception" || role === "admin") && <SickList setShowSildBar={setShowSildBar} />}
            {role === "admin" && <SurgeryTypeList setShowSildBar={setShowSildBar} />}
            {(role === "reception" || role === "admin") && <ExpenseType setShowSildBar={setShowSildBar} />}
            {(role === "reception" || role === "admin") && <ExpenseList setShowSildBar={setShowSildBar} />}
            {role === "admin" && <ReportList setShowSildBar={setShowSildBar} />}
            {role === "admin" && <UsersList setShowSildBar={setShowSildBar} />}
        </ul>


    )
}

export default BottomSideBar
import { Link, useLocation } from "react-router-dom";
import { TbReportMedical } from "react-icons/tb";
import { MdArrowRight } from "react-icons/md";


const ReportList = ({ setShowSildBar }) => {
    const location = useLocation()
    return (

        <li onClick={() => setShowSildBar(false)} className={`${location.pathname === '/report' && 'bg-blue-500 text-white'}  group cursor-pointer w-full items-center hover:text-white hover:bg-blue-500 duration-100 p-2.5 rounded-lg `} >
            <Link to="/report" className="flex justify-between items-center ">
                <div className="flex gap-3">
                    <TbReportMedical size={23} />
                    <span >Report</span>
                </div>

                <MdArrowRight className={` ${location.pathname === '/report' && 'text-white'} text-white  group-hover:text-white rounded-xl`} size={20} />

            </Link>

        </li>

    )
}

export default ReportList
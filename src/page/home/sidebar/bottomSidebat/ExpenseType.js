import { Link, useLocation } from "react-router-dom";
import { TbReportMoney } from "react-icons/tb";
import { MdArrowRight } from "react-icons/md";



const ExpenseType = ({ setShowSildBar }) => {
    const location = useLocation()
    return (

        <li onClick={() => setShowSildBar(false)} className={`${location.pathname === '/expensetype' && 'bg-[#0171FE] text-white'}  group cursor-pointer w-full items-center hover:text-white hover:bg-[#0171FE] duration-100 p-2.5 rounded-lg `} >
            <Link to="/expensetype" className=" flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <TbReportMoney size={22} className="2xl:scale-125" />
                    <span className="2xl:text-xl">ExpenseType</span>
                </div>

                <MdArrowRight className={` ${location.pathname === '/doctor' && 'text-white'}  text-white  group-hover:text-white rounded-xl`} size={20} />

            </Link>

        </li>

    )
}

export default ExpenseType
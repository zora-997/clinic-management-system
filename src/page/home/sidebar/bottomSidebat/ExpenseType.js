import { Link, useLocation } from "react-router-dom";
import { TbReportMoney } from "react-icons/tb";
import { MdArrowRight } from "react-icons/md";



const ExpenseType = () => {
    const location = useLocation()
    return (
        <div className='w-full'>
            <li className={`${location.pathname === '/expensetype' && 'bg-blue-500 text-white'} mb-2 group cursor-pointer w-full items-center hover:text-white hover:bg-blue-500 duration-100 p-2.5 rounded-lg `} >
                <Link to="/expensetype" className="relative flex justify-start items-center w-full">
                    <TbReportMoney size={22} className="mr-4 ml-7" />
                    <span >ExpenseType</span>
                    <MdArrowRight className={` ${location.pathname === '/doctor' && 'text-white'} absolute right-0 text-white  group-hover:text-white rounded-xl`} size={20} />

                </Link>

            </li>
        </div>
    )
}

export default ExpenseType
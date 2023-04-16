import { Link, useLocation } from "react-router-dom";
import { TfiMoney } from "react-icons/tfi";
import { MdArrowRight } from "react-icons/md";



const ExpenseList = () => {
    const location = useLocation()
    return (
        <div className='w-full'>
            <li className={`${location.pathname === '/expense' && 'bg-blue-500 text-white'} mb-2 group cursor-pointer w-full items-center hover:text-white hover:bg-blue-500 duration-100 p-2.5 rounded-full `} >
                <Link to="/expense" className="relative flex justify-start items-center w-full">
                    <TfiMoney size={22} className="mr-4 ml-7" />
                    <span >Expense</span>
                    <MdArrowRight className={` ${location.pathname === '/expense' && 'text-white'} absolute right-0 text-white  group-hover:text-white rounded-xl`} size={20} />

                </Link>

            </li>
        </div>
    )
}

export default ExpenseList
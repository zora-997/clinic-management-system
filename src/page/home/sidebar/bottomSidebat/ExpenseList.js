import { Link, useLocation } from "react-router-dom";
import { MdArrowRight } from "react-icons/md";
import { SiExpensify } from "react-icons/si";



const ExpenseList = ({ setShowSildBar }) => {
    const location = useLocation()
    return (

        <li onClick={() => setShowSildBar(false)} className={`${location.pathname === '/expense' && 'bg-blue-500 text-white'}  group cursor-pointer w-full  hover:text-white hover:bg-blue-500 duration-100 p-2.5 rounded-lg `} >
            <Link to="/expense" className=" flex justify-between items-center ">
                <div className="flex gap-3">
                    <SiExpensify size={20} />
                    <span >Expense</span>
                </div>

                <MdArrowRight className={` ${location.pathname === '/expense' && 'text-white'}  text-white   group-hover:text-white rounded-xl`} size={20} />


            </Link>

        </li>

    )
}

export default ExpenseList
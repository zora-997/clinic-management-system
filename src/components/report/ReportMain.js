import React, { useContext, useState } from 'react'
import GlobalContext from '../contexts/createContext/context'
import ReportDoctor from './ReportDoctor';
import { HiArrowSmRight } from "react-icons/hi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { AiFillMoneyCollect, AiOutlineMoneyCollect } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { SiExpensify, SiVirustotal } from "react-icons/si";
import ReportExpense from './ReportExpense';
import cost from "../../img/image/cost.svg";

const ReportMain = () => {
    const [showDoctor, setShowDoctor] = useState(false);
    const [show, setShow] = useState(false);

    const { mainReportList } = useContext(GlobalContext)
    return (
        <div className='flex justify-end mt-8'>
            <div className='grid gap-y-8 place-items-start grid-cols-3 w-3/4 mr-20'>

                <div className="w-[240px] p-3 mb-2 bg-white group border-t-8 border-t-cyan-300 hover:border border duration-300   hover:border-cyan-300  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {/* <img src={cost} className="w-10 h-10 mb-4 group-hover:text-cyan-400 duration-300 text-gray-500 dark:text-gray-400" /> */}
                    <AiOutlineMoneyCollect className="w-10 h-10 mb-4 group-hover:text-cyan-400 duration-300 text-gray-500 dark:text-gray-400" />
                    <h5 className="my-2.5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Total Static</h5>
                    <p className="my-1 font-body text-sm text-gray-500 dark:text-gray-400">Total Static : {mainReportList.total_income + mainReportList.total_expense}</p>

                </div>



                <div className="relative w-[240px]  p-3 overflow-hidden bg-white group border-t-8 border-t-green-300 hover:border border duration-300   hover:border-green-300  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <ReportDoctor showDoctor={showDoctor} setShowDoctor={setShowDoctor} />
                    <div className='flex items-start justify-between mb-2'>
                        {/* <svg className="w-10 h-10 mb-2 group-hover:text-green-400 duration-300 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
                        <MdAttachMoney className="w-10 h-10 mb-2 group-hover:text-green-400 duration-300 text-gray-500 dark:text-gray-400" />
                        <HiArrowSmRight onClick={() => { setShowDoctor(true); console.log(showDoctor); }} size={30} className='group-hover:text-green-300 text-white cursor-pointer  duration-300 ' />
                    </div>
                    <h5 className="my-2.5  text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Total Income</h5>
                    <p className="my-1 font-body text-sm text-gray-500 dark:text-gray-400">Income : {mainReportList.total_income}</p>
                    {/* <span className='absolute rounded-full w-32 h-32 border-white  group-hover:border-green-300  border duration-500 -right-14  -top-14 '></span> */}
                </div>



                <div className="relative w-[240px] p-3 overflow-hidden bg-white group border-t-8 border-t-purple-300 hover:border border duration-300   hover:border-purple-300  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <ReportExpense show={show} setShow={setShow} />
                    <div className='flex items-start justify-between mb-2'>
                        {/* <svg className="w-10 h-10 mb-2 group-hover:text-purple-400 duration-300 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
                        <SiExpensify className="w-10 h-10 mb-2 group-hover:text-purple-400 duration-300 text-gray-500 dark:text-gray-400" />
                        <HiArrowSmRight onClick={() => setShow(true)} size={30} className='group-hover:text-purple-300 text-white cursor-pointer  duration-300 ' />
                    </div>
                    <h5 className="my-2.5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Total Expense</h5>
                    <p className="my-1 font-body text-sm text-gray-500 dark:text-gray-400">Expense : {mainReportList.total_expense}</p>
                    {/* <span className='absolute rounded-full w-32 h-32 border-white  group-hover:border-green-300  border duration-500 -right-14  -top-14 '></span> */}
                </div>




            </div>
        </div>
    )
}

export default ReportMain
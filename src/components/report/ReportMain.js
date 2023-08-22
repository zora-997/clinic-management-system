import React, { useContext, useState } from 'react'
import GlobalContext from '../contexts/createContext/context'
import ReportDoctor from './ReportDoctor';
import { HiArrowSmRight, HiOutlineAnnotation } from "react-icons/hi";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { SiExpensify } from "react-icons/si";
import { TbZoomMoney } from "react-icons/tb";
import { BiUserPin } from "react-icons/bi";
import ReportExpense from './ReportExpense';


const ReportMain = () => {
    const [showDoctor, setShowDoctor] = useState(false);
    const [show, setShow] = useState(false);

    const { mainReportList } = useContext(GlobalContext)
    return (
        <div className='mt-7'>
            <div className='grid gap-y-5 gap-x-5 place-items-center sm:grid-cols-2 md:grid-cols-3  px-5  bg-white rounded-md py-8'>


                <div className="w-full p-3 bg-white group  border duration-300   border-cyan-300  rounded-lg shadow ">
                    <AiOutlineMoneyCollect className="w-10 h-10  group-hover:text-cyan-400 duration-300 text-cyan-500 " />
                    <h5 className="my-3 text-xl font-semibold tracking-tight text-gray-900 ">Total Static</h5>
                    <p className="my-1 font-body text-sm text-gray-500 ">Total Static : {mainReportList.total_income + mainReportList.total_expense}</p>
                </div>



                <div className="relative w-full  p-3 overflow-hidden bg-white group border duration-300   border-green-300  rounded-lg shadow ">
                    <ReportDoctor showDoctor={showDoctor} setShowDoctor={setShowDoctor} />
                    <div className='flex items-start justify-between'>
                        <MdAttachMoney className="w-10 h-10 group-hover:text-green-400 duration-300 text-green-500 " />
                        <HiArrowSmRight onClick={() => { setShowDoctor(true); console.log(showDoctor); }} size={30} className='group-hover:text-green-300 text-white cursor-pointer  duration-300 ' />
                    </div>
                    <h5 className="my-3  text-xl font-semibold tracking-tight text-gray-900  ">Total Income</h5>
                    <p className="my-1 font-body text-sm text-gray-500 ">Income : {mainReportList.total_income}</p>
                    {/* <span className='absolute rounded-full w-32 h-32 border-white  group-hover:border-green-300  border duration-500 -right-14  -top-14 '></span> */}
                </div>



                <div className="relative w-full p-3 overflow-hidden bg-white group  border duration-300  border-purple-300  rounded-lg shadow ">
                    <ReportExpense show={show} setShow={setShow} />
                    <div className='flex items-start justify-between'>
                        {/* <svg className="w-10 h-10 mb-2 group-hover:text-purple-400 duration-300 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
                        <SiExpensify className="w-10 h-10 group-hover:text-purple-400 duration-300 text-purple-500 " />
                        <HiArrowSmRight onClick={() => setShow(true)} size={30} className='group-hover:text-purple-300 text-white cursor-pointer  duration-300 ' />
                    </div>
                    <h5 className="my-3 text-xl font-semibold tracking-tight text-gray-900 ">Total Expense</h5>
                    <p className="my-1 font-body text-sm text-gray-500 ">Expense : {mainReportList.total_expense}</p>
                    {/* <span className='absolute rounded-full w-32 h-32 border-white  group-hover:border-green-300  border duration-500 -right-14  -top-14 '></span> */}
                </div>

                {/* ******************************* bashi dwam ***************************************** */}


                {/* ******************************* surgey total ***************************************** */}

                <div className="relative w-full p-3 overflow-hidden bg-white group  border duration-300   border-orange-300  rounded-lg shadow ">
                    {/* <svg className="w-10 h-10 mb-2 group-hover:text-purple-400 duration-300 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
                    <HiOutlineAnnotation className="w-10 h-10 group-hover:text-orange-400 duration-300 text-orange-500 " />
                    <h5 className="my-3 text-xl font-semibold tracking-tight text-gray-900 ">Total Working</h5>
                    <p className="my-1 font-body text-sm text-gray-500 ">Working : {mainReportList.total_expense}</p>
                    {/* <span className='absolute rounded-full w-32 h-32 border-white  group-hover:border-green-300  border duration-500 -right-14  -top-14 '></span> */}
                </div>


                {/* ******************************* Loan ***************************************** */}
                <div className="relative w-full p-3 overflow-hidden bg-white group border duration-300  border-red-300  rounded-lg shadow ">
                    <div className='flex items-start justify-between'>
                        {/* <svg className="w-10 h-10 mb-2 group-hover:text-purple-400 duration-300 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
                        <TbZoomMoney className="w-10 h-10 group-hover:text-red-400 duration-300 text-red-500 " />
                        <HiArrowSmRight size={30} className='group-hover:text-red-300 text-white cursor-pointer  duration-300 ' />
                    </div>
                    <h5 className="my-3 text-xl font-semibold tracking-tight text-gray-900 ">Total Loan</h5>
                    <p className="my-1 font-body text-sm text-gray-500 ">Loan : {mainReportList.total_expense}</p>
                    {/* <span className='absolute rounded-full w-32 h-32 border-white  group-hover:border-green-300  border duration-500 -right-14  -top-14 '></span> */}
                </div>





                {/* ******************************* appointment ***************************************** */}

                <div className="relative w-full p-3 overflow-hidden bg-white group  border duration-300   border-yellow-300  rounded-lg shadow ">
                    <div className='flex items-start justify-between'>
                        {/* <svg className="w-10 h-10 mb-2 group-hover:text-purple-400 duration-300 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
                        <BiUserPin className="w-10 h-10  group-hover:text-yellow-400 duration-300 text-yellow-500 " />
                        <HiArrowSmRight size={30} className='group-hover:text-yellow-300 text-white cursor-pointer  duration-300 ' />
                    </div>
                    <h5 className="my-3 text-xl font-semibold tracking-tight text-gray-900 ">Total Appointment</h5>
                    <p className="my-1 font-body text-sm text-gray-500 ">Appointment : {mainReportList.total_expense}</p>
                    {/* <span className='absolute rounded-full w-32 h-32 border-white  group-hover:border-green-300  border duration-500 -right-14  -top-14 '></span> */}
                </div>




            </div>
        </div>
    )
}

export default ReportMain
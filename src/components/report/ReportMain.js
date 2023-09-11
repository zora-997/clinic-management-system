import React, { useContext, useState } from 'react'
import GlobalContext from '../contexts/createContext/context'
import ReportDoctor from './ReportDoctor';
import { HiOutlineAnnotation } from "react-icons/hi";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { SiExpensify } from "react-icons/si";
import ReportExpense from './ReportExpense';
import ReportAll from './ReportAll';
import ReportWorkingType from './ReportWorkingType';


const ReportMain = ({ from, to, doctor_id, expense_type_id, working_type_id, setErorFrom, setErorTo, setErorDoctorid }) => {
    const [showDoctor, setShowDoctor] = useState(false);
    const [showExpense, setShowExpense] = useState(false);
    const [showMain, setShowMain] = useState(false);
    const [showWorkingType, setShowWorkingType] = useState(false);


    const { mainReportList, doctorlegerList, expenseReportList, fetchExpensereportReport, fetchDoctorlegerReport,
        fetchReport, fetchWorkingTypeReportReport, workingTypeReportList } = useContext(GlobalContext);


    // doctor report
    const doctorReport = (e) => {
        e.preventDefault();
        if (doctor_id && from && to) {
            fetchDoctorlegerReport({ from, to, doctor_id })
            setShowDoctor(true)
            setShowExpense(false)
            setShowMain(false)
            setShowWorkingType(false)
        } else if (!from) {
            setErorFrom(true)
        }

        else if (!to) {
            setErorTo(true)
        }
        else if (!doctor_id) {
            setErorDoctorid(true)
        }
    }

    // expense report
    const expenseReport = (e) => {
        e.preventDefault();
        if (from && to) {
            fetchExpensereportReport({ from, to, expense_type_id })
            setShowExpense(true)
            setShowDoctor(false)
            setShowMain(false)
            setShowWorkingType(false)
        } else if (!from) {
            setErorFrom(true)
        }

        else if (!to) {
            setErorTo(true)
        }
    }

    // main report
    const mainReport = (e) => {
        e.preventDefault();
        if (from && to) {
            fetchReport({ from, to })
            setShowMain(true)
            setShowExpense(false)
            setShowDoctor(false)
            setShowWorkingType(false)
        } else if (!from) {
            setErorFrom(true)
        }

        else if (!to) {
            setErorTo(true)
        }
    }
    // working type report
    const workingTypeReport = (e) => {
        e.preventDefault();
        if (from && to) {
            fetchWorkingTypeReportReport({ from, to, working_type_id })
            setShowWorkingType(true)
            setShowMain(false)
            setShowExpense(false)
            setShowDoctor(false)
        } else if (!from) {
            setErorFrom(true)
        }

        else if (!to) {
            setErorTo(true)
        }
    }


    return (

        <div className='mt-4 '>
            <div className='grid gap-y-5 gap-x-5 place-items-center sm:grid-cols-2 md:grid-cols-4  px-5
              bg-white rounded-md py-8'>



                {/* doctor report */}
                <div onClick={(e) => { doctorReport(e) }}
                    className="relative w-full cursor-pointer p-3 overflow-hidden bg-white group border duration-300   border-green-300  rounded-lg shadow ">
                    {/* <ReportDoctor showDoctor={showDoctor} setShowDoctor={setShowDoctor} /> */}
                    <div className='flex items-start justify-between'>
                        <MdAttachMoney className="w-10 h-10 group-hover:text-green-400 duration-300 text-green-500 " />
                        {/* <HiArrowSmRight onClick={() => { setShowDoctor(true); console.log(showDoctor); }} size={30} className='group-hover:text-green-300 text-white cursor-pointer  duration-300 ' /> */}
                    </div>
                    <h5 className="my-3  text-xl font-semibold tracking-tight text-gray-900  ">Doctor Report</h5>
                    <p className="my-1 font-body text-sm text-gray-500 ">(Doctor , From , To)</p>
                    {/* <span className='absolute rounded-full w-32 h-32 border-white  group-hover:border-green-300  border duration-500 -right-14  -top-14 '></span> */}
                </div>



                <div onClick={(e) => expenseReport(e)}
                    className="relative w-full cursor-pointer p-3 overflow-hidden bg-white group  border duration-300  border-purple-300  rounded-lg shadow ">
                    {/* <ReportExpense show={show} setShow={setShow} /> */}
                    <div className='flex items-start justify-between'>
                        {/* <svg className="w-10 h-10 mb-2 group-hover:text-purple-400 duration-300 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
                        <SiExpensify className="w-10 h-10 group-hover:text-purple-400 duration-300 text-purple-500 " />
                        {/* <HiArrowSmRight onClick={() => setShow(true)} size={30} className='group-hover:text-purple-300 text-white cursor-pointer  duration-300 ' /> */}
                    </div>
                    <h5 className="my-3 text-xl font-semibold tracking-tight text-gray-900 ">Expense Report</h5>
                    <p className="my-1 font-body text-sm text-gray-500 ">(Expense Type , From , To)</p>
                    {/* <span className='absolute rounded-full w-32 h-32 border-white  group-hover:border-green-300  border duration-500 -right-14  -top-14 '></span> */}
                </div>




                {/* ******************************* surgey total ***************************************** */}

                <div
                    onClick={(e) => workingTypeReport(e)}
                    className="relative w-full cursor-pointer p-3 overflow-hidden bg-white group  border duration-300   border-orange-300  rounded-lg shadow ">
                    {/* <svg className="w-10 h-10 mb-2 group-hover:text-purple-400 duration-300 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
                    <HiOutlineAnnotation className="w-10 h-10 group-hover:text-orange-400 duration-300 text-orange-500 " />
                    <h5 className="my-3 text-xl font-semibold tracking-tight text-gray-900 ">Working Report</h5>
                    <p className="my-1 font-body text-sm text-gray-500 ">(Working Type , From , To)</p>
                    {/* <span className='absolute rounded-full w-32 h-32 border-white  group-hover:border-green-300  border duration-500 -right-14  -top-14 '></span> */}
                </div>

                {/* main report */}
                <div
                    onClick={(e) => mainReport(e)}
                    className="w-full cursor-pointer p-3 bg-white group  border duration-300   border-cyan-300  rounded-lg shadow ">
                    <AiOutlineMoneyCollect className="w-10 h-10  group-hover:text-cyan-400 duration-300 text-cyan-500 " />
                    <h5 className="my-3 text-xl font-semibold tracking-tight text-gray-900 ">Main Report</h5>
                    <p className="my-1 font-body text-sm text-gray-500 ">(From , To)</p>
                </div>




            </div>
            {showDoctor &&
                <ReportDoctor showDoctor={showDoctor} setShowDoctor={setShowDoctor}
                    doctorlegerList={doctorlegerList} />
            }

            {
                showExpense &&
                <ReportExpense showExpense={showExpense}
                    expenseReportList={expenseReportList} />
            }

            {
                showMain &&
                <ReportAll showMain={showMain} mainReportList={mainReportList} />
            }

            {
                showWorkingType &&
                <ReportWorkingType showWorkingType={showWorkingType} workingTypeReportList={workingTypeReportList} />
            }
        </div>
    )
}

export default ReportMain
import React from 'react'

const ReportAll = ({ showMain, mainReportList }) => {

    if (!showMain) return null;
    return (
        <div className='mt-4'>
            <div className='w-full bg-white p-5 rounded-md'>
                <h1 className=' text-2xl border-b-2  mb-2 '>Main Report</h1>
                <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
                    <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
                    </thead>
                    <tbody>

                        <tr className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                            <th scope="col" className="bg-cyan-500 text-white px-6 py-3">Total Income</th>
                            <td className="px-6 py-4">{mainReportList.total_income}</td>
                        </tr>
                        <tr className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                            <th scope="col" className="bg-cyan-500 text-white px-6 py-3">Total Expense</th>
                            <td className="px-6 py-4">{mainReportList.total_expense}</td>
                        </tr>
                        <tr className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                            <th scope="col" className="bg-cyan-500 text-white px-6 py-3">Summary</th>
                            <td className="px-6 py-4">{mainReportList.summary}</td>
                        </tr>




                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ReportAll
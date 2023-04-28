import React, { useContext } from 'react'
import GlobalContext from '../contexts/createContext/context'

const ReportDoctor = () => {
    const { mainReportList } = useContext(GlobalContext);

    console.log();

    return (
        <div className='flex justify-end mt-8'>
            <div className='w-3/4 mr-20 flex flex-col'>
                <table className="whitespace-nowrap bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Id</th>
                            <th scope="col" className="px-6 py-3">Doctor Name</th>
                            <th scope="col" className="px-6 py-3">Percentage</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Total income</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mainReportList.doctor && mainReportList.doctor.map((doctor, index) => {
                            return <tr key={index}
                                className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                                <th scope='row' className="px-5 py-4">&nbsp;&nbsp;{index + 1}</th>
                                <td className="px-6 py-4">{doctor.doctor_name}</td>
                                <td className="px-6 py-4">{doctor.doctor_percentage} %</td>
                                <td className="px-6 py-4">{doctor.doctor_date}</td>
                                <td className="px-6 py-4">{doctor.total_income}</td>

                            </tr>
                        })}
                    </tbody>
                </table>

                <div className='w-full flex justify-center bg-green-100/50 my-3'>
                    <span className='py-3 text-green-500'>Total Income : {mainReportList.total_income}</span>
                </div>
            </div>
        </div>

    )
}

export default ReportDoctor
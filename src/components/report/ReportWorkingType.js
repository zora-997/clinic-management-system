import React, { useState } from 'react'
import WorkingTypeReportModal from '../layout/modal/WorkingTypeReportModal';

const ReportWorkingType = ({ showWorkingType, workingTypeReportList }) => {

    const [show, setShow] = useState(false);
    const [workingType, setWorkingType] = useState([]);

    if (!showWorkingType) return null;
    return (
        <div className='mt-4'>
            <WorkingTypeReportModal workingType={workingType} show={show} setShow={setShow} />
            <div className='w-full bg-white p-5 rounded-md'>
                <h1 className=' text-2xl border-b-2  mb-2 '>Working Type Report</h1>
                <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
                    <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">qty</th>
                            <th scope="col" className="px-6 py-3">price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {workingTypeReportList.data && workingTypeReportList.data.map((work, index) => {
                            return (
                                <tr key={index}
                                    onClick={() => { setShow(true); setWorkingType(work.working_type) }}
                                    className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                                    <th scope='row' className="px-5 py-4">{work.surgery_type_name}</th>
                                    <td className="px-6 py-4">{work.qty}</td>
                                    <th scope='row' className="px-5 py-4">{work.price}</th>

                                </tr>
                            )
                        })}


                    </tbody>

                </table>
            </div>
        </div>
    )

}

export default ReportWorkingType
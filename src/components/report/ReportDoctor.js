import React from 'react'


const ReportDoctor = ({ showDoctor, doctorlegerList }) => {


    console.log();

    if (!showDoctor) return null;
    return (
        <div className='mt-4'>
            <div className='w-full bg-white p-5 rounded-md'>
                <h1 className=' text-2xl border-b-2  mb-2 '>Doctor Report</h1>
                <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
                    <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">Number</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Phone</th>
                            <th scope="col" className="px-6 py-3">Wrking type</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctorlegerList.doctor_ledger && doctorlegerList.doctor_ledger.map((doctor, index) => {
                            return (
                                <tr
                                    key={index}
                                    className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                                    <th scope='row' className="px-5 py-4">{index + 1}</th>
                                    <th scope='row' className="px-5 py-4">{doctor.sick_name}</th>
                                    <td className="px-6 py-4">{doctor.sick_phone}</td>
                                    <td className="px-6 py-4">{doctor.surgery_type_name}</td>
                                    <td className="px-6 py-4">{doctor.surgery_type_price}</td>
                                    <td className="px-6 py-4">{doctor.sick_surgery_invoice_date}</td>

                                </tr>

                            )
                        })}
                        <tr className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                            <th scope='row' className="px-5 py-4">Total Income</th>
                            <td className="px-6 py-4">{doctorlegerList.price}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReportDoctor







// taybata ba modal

// <div onClick={() => setShowDoctor(false)} className=' fixed  z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
//     <div className='w-3/4 flex flex-col'>
//         <table className="whitespace-nowrap bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
//             <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
//                 <tr>
//                     <th scope="col" className="px-6 py-3">Id</th>
//                     <th scope="col" className="px-6 py-3">Doctor Name</th>
//                     <th scope="col" className="px-6 py-3">Percentage</th>
//                     <th scope="col" className="px-6 py-3">Date</th>
//                     <th scope="col" className="px-6 py-3">Total income</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {mainReportList.doctor && mainReportList.doctor.map((doctor, index) => {
//                     return <tr key={index}
//                         className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
//                         <th scope='row' className="px-5 py-4">&nbsp;&nbsp;{index + 1}</th>
//                         <td className="px-6 py-4">{doctor.doctor_name}</td>
//                         <td className="px-6 py-4">{doctor.doctor_percentage} %</td>
//                         <td className="px-6 py-4">{doctor.doctor_date}</td>
//                         <td className="px-6 py-4">{doctor.total_income}</td>

//                     </tr>
//                 })}
//             </tbody>
//         </table>

//         <div className='w-full flex justify-center bg-green-100/75 my-3'>
//             <span className='py-3 text-green-500'>Total Income : {mainReportList.total_income}</span>
//         </div>
//     </div>

// </div>
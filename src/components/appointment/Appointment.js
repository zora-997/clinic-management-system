import React from 'react'

const Appointment = () => {
    return (
        <div className='flex w-full justify-end mt-8'>

            <div className=' bg-white p-2 mr-24 w-3/4 shadow-sm shadow-gray-200 mt-5 rounded-t-3xl '>
                <table className="  w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs rounded-2xl  text-gray-900 uppercase ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Disease
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Time
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap capitalize ">
                                arkan osman
                            </th>
                            <td className="px-6 py-4">
                                male
                            </td>
                            <td className="px-6 py-4">
                                <span className='text-blue-500 bg-blue-100/60 rounded-3xl p-1 px-2'>shakara</span>
                            </td>
                            <td className="px-6 py-4">
                                10:30 AM
                            </td>
                        </tr>
                        <tr className="bg-white ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                                zanyar jaza
                            </th>
                            <td className="px-6 py-4">
                                male
                            </td>
                            <td className="px-6 py-4">
                                <span className='text-green-500 bg-green-100/60 rounded-3xl p-1 px-2'> corona</span>
                            </td>
                            <td className="px-6 py-4">
                                12:25 PM
                            </td>
                        </tr>
                        <tr className="bg-white ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                                kazhan
                            </th>
                            <td className="px-6 py-4">
                                female
                            </td>
                            <td className="px-6 py-4 ">
                                <span className='text-purple-500 bg-purple-100/60 rounded-3xl p-1 px-2'>hallamat</span>
                            </td>
                            <td className="px-6 py-4">
                                3:15 AM
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap capitalize ">
                                arkan osman
                            </th>
                            <td className="px-6 py-4">
                                male
                            </td>
                            <td className="px-6 py-4">
                                <span className='text-blue-500 bg-blue-100/60 rounded-3xl p-1 px-2'>shakara</span>
                            </td>
                            <td className="px-6 py-4">
                                10:30 AM
                            </td>
                        </tr>
                        <tr className="bg-white ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                                zanyar jaza
                            </th>
                            <td className="px-6 py-4">
                                male
                            </td>
                            <td className="px-6 py-4">
                                <span className='text-green-500 bg-green-100/60 rounded-3xl p-1 px-2'> corona</span>
                            </td>
                            <td className="px-6 py-4">
                                12:25 PM
                            </td>
                        </tr>
                        <tr className="bg-white ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
                                kazhan
                            </th>
                            <td className="px-6 py-4">
                                female
                            </td>
                            <td className="px-6 py-4 ">
                                <span className='text-purple-500 bg-purple-100/60 rounded-3xl p-1 px-2'>hallamat</span>
                            </td>
                            <td className="px-6 py-4">
                                3:15 AM
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>


    )
}

export default Appointment
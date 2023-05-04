import React from 'react'

const CardAppointment = () => {
    return (
        <div className=' bg-white p-2 border-t border-t-gray-50 shadow-sm shadow-gray-200 mt-5 rounded-t-3xl '>
            <table class="  w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs rounded-2xl  text-gray-900 uppercase ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Disease
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Time
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-500 whitespace-nowrap capitalize ">
                            arkan osman
                        </th>
                        <td class="px-6 py-4">
                            male
                        </td>
                        <td class="px-6 py-4">
                            <span className='text-blue-500 bg-blue-100/60 rounded-3xl p-1 px-2'>shakara</span>
                        </td>
                        <td class="px-6 py-4">
                            10:30 AM
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                            zanyar jaza
                        </th>
                        <td class="px-6 py-4">
                            male
                        </td>
                        <td class="px-6 py-4">
                            <span className='text-green-500 bg-green-100/60 rounded-3xl p-1 px-2'> corona</span>
                        </td>
                        <td class="px-6 py-4">
                            12:25 PM
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                            kazhan
                        </th>
                        <td class="px-6 py-4">
                            female
                        </td>
                        <td class="px-6 py-4 ">
                            <span className='text-purple-500 bg-purple-100/60 rounded-3xl p-1 px-2'>hallamat</span>
                        </td>
                        <td class="px-6 py-4">
                            3:15 AM
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CardAppointment
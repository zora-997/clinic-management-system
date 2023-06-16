import React, { useContext, useState } from 'react'
import GlobalContext from '../../contexts/createContext/context';
import AppointmentModal from '../modal/AppointmentModal';

const CardAppointment = ({ ddate }) => {
    const { appointmentList } = useContext(GlobalContext);


    return (
        <div className=' bg-white p-2 border-t border-t-gray-100 shadow-sm shadow-gray-200 mt-2 rounded-t-3xl '>

            <table className="  w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs rounded-2xl  text-gray-900 uppercase ">
                    <tr>
                        <th scope="col" className="px-6 py-3">ID </th>
                        <th scope="col" className="px-6 py-3">Sick Name </th>
                        <th scope="col" className="px-6 py-3">Doctor name </th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Time </th>
                        <th scope="col" className="px-6 py-3">Note </th>
                    </tr>
                </thead>

                <tbody>
                    {appointmentList && appointmentList.map((appointment, index) => {
                        return <tr
                            key={index}

                            className=" cursor-pointer select-none hover:bg-gray-50 duration-100  ">
                            <th scope='row' className="px-5 py-4">&nbsp;&nbsp;{index + 1}</th>
                            <td className="px-6 py-4">{appointment.sick_name}</td>
                            <td className="px-6 py-4">{appointment.doctor_name}</td>
                            <td className="px-6 py-4">{appointment.appointment_date}</td>
                            <td className="px-6 py-4">{appointment.appointment_time}</td>
                            <td className="px-6 py-4">{appointment.appointment_note}</td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default CardAppointment
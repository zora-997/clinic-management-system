import React, { useContext, useState } from 'react'
import GlobalContext from '../../contexts/createContext/context';
import AppointmentModal from '../modal/AppointmentModal';

const CardAppointment = ({ ddate }) => {
    const { appointmentList } = useContext(GlobalContext);
    const [show, setShow] = useState(false);
    const [appointment_id, setAppointmentId] = useState(0);
    const [sick_id, setSick_id] = useState(0)
    const [doctor_id, setDoctor_id] = useState(0);
    const [sick_name, setSick_name] = useState("");
    const [doctor_name, setDoctor_name] = useState("");
    const [appointment_date, setAppointmentDate] = useState("");
    const [appointment_time, setAppointmentTime] = useState("");
    const [appointment_note, setAppointmentNot] = useState("");

    return (
        <div className=' bg-white p-2 border-t border-t-gray-100 shadow-sm shadow-gray-200 mt-2 rounded-t-3xl '>
            <AppointmentModal isVisible={show} onClose={setShow}
                appointment_id={appointment_id}
                sick_id={sick_id}
                setSick_id={setSick_id}
                doctor_id={doctor_id}
                setDoctor_id={setDoctor_id}
                sick_name={sick_name}
                setSick_name={setSick_name}
                doctor_name={doctor_name}
                setDoctor_name={setDoctor_name}
                appointment_date={appointment_date}
                setAppointmentDate={setAppointmentDate}
                appointment_time={appointment_time}
                setAppointmentTime={setAppointmentTime}
                appointment_note={appointment_note}
                setAppointmentNot={setAppointmentNot}
                ddate={ddate}
            />
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
                            onClick={() => {
                                setShow(true);
                                setAppointmentId(appointment.appointment_id);
                                setSick_id(appointment.sick_id);
                                setDoctor_id(appointment.doctor_id);
                                setSick_name(appointment.sick_name);
                                setDoctor_name(appointment.doctor_name);
                                setAppointmentDate(appointment.appointment_date);
                                setAppointmentTime(appointment.appointment_time);
                                setAppointmentNot(appointment.appointment_note)

                            }}
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
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../contexts/createContext/context';
import AppointmentModal from '../layout/modal/AppointmentModal';
// import AddAppointmentModal from '../layout/modal/AddAppointmentModal';
import CreateAppointment from './CreateAppointment';

const Appointment = () => {

    const { appointmentList, setDate, ddate, fetchAppointment } = useContext(GlobalContext);
    const [show, setShow] = useState(false);
    const [appointment_id, setAppointmentId] = useState(0);
    const [sick_id, setSick_id] = useState(0)
    const [doctor_id, setDoctor_id] = useState(0);
    const [sick_name, setSick_name] = useState("");
    const [doctor_name, setDoctor_name] = useState("");
    const [appointment_date, setAppointmentDate] = useState("");
    const [appointment_time, setAppointmentTime] = useState("");
    const [appointment_note, setAppointmentNot] = useState("");

    // const [addshow, setAddShow] = useState(false);


    /* const did = doctorList.map((d) => d.doctor_id)
    const dn = doctorList.map((d) => d.doctor_name)
    
    const sid = sickList.map((s) => s.sick_id)
    const sn = sickList.map((s) => s.sick_name) */

    useEffect(() => {
        fetchAppointment(ddate)
    }, [ddate])

    return (

        <div className=" flex flex-col items-center pl-28 mt-8 w-full select-none">
            <AppointmentModal
                isVisible={show}
                onClose={setShow}
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
            {/* <AddAppointmentModal isAddVisible={addshow} onClose={setAddShow} /> */}

            <CreateAppointment ddate={ddate} />


            <div className='mt-6 bg-white ml-16 p-5 rounded-md'>
                <div className='flex justify-between items-center mb-2 '>

                    <div className='flex flex-col   w-1/3'>
                        <label className='text-gray-600' >Appointment Date</label>
                        <input onChange={(e) => setDate(e.target.value)} value={ddate} type="date" className={`focus:ring-1 focus:outline-none border  p-1 rounded`} />
                    </div>
                </div>

                <table className="whitespace-nowrap bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500  w-[1000px]">
                    <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">Id</th>
                            <th scope="col" className="px-6 py-3">Sick name</th>
                            <th scope="col" className="px-6 py-3">Doctor name</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Time</th>
                            <th scope="col" className="px-6 py-3">Not</th>
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
                                className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
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
                {!ddate ?
                    <div className='py-1 w-full bg-yellow-100/50  text-yellow-500 flex justify-center'><span className='  p-1 rounded'>No Appointment</span></div> : null}
            </div>

        </div>



    )
}

export default Appointment
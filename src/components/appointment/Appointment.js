import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../contexts/createContext/context';
import AppointmentModal from '../layout/modal/AppointmentModal';
import AddAppointmentModal from '../layout/modal/AddAppointmentModal';

const Appointment = () => {

    const { appointmentList, fetchAppointment, doctorList, sickList } = useContext(GlobalContext);
    const [show, setShow] = useState(false);
    const [addshow, setAddShow] = useState(false);
    const [ddate, setDate] = useState("");

    const did = doctorList.map((d) => d.doctor_id)
    const dn = doctorList.map((d) => d.doctor_name)

    const sid = sickList.map((s) => s.sick_id)
    const sn = sickList.map((s) => s.sick_name)

    useEffect(() => {
        fetchAppointment(ddate)
    }, [ddate])



    return (

        <div className=" flex flex-col  items-center  w-full select-none">
            <AppointmentModal isVisible={show} onClose={setShow} />
            <AddAppointmentModal isAddVisible={addshow} onClose={setAddShow} />
            <div className='ml-36 mt-10'>
                <div className='flex justify-between items-center mb-2 '>
                    <button onClick={() => setAddShow(true)} className={`
                     text-white shadow-sm flex items-center shadow-gray-300 border place-self-end
                      hover:text-cyan-400 border-cyan-300 h-fit p-1 px-7 rounded-md bg-cyan-500 hover:bg-transparent duration-200`}>Create Appointment</button>
                    <div className='flex flex-col   w-1/3'>
                        <label className='text-gray-600' >Date</label>
                        <input onChange={(e) => setDate(e.target.value)} type="date" className={`focus:ring-1 focus:outline-none border  p-1 rounded`} />
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
                        {ddate && appointmentList.map((appointment, index) => {
                            return <tr key={index} onClick={() => { setShow(true); }}
                                className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                                <th scope='row' className="px-5 py-4">&nbsp;&nbsp;{index + 1}</th>
                                <td className="px-6 py-4">{sn[sid.indexOf(`${appointment.sick_id}`)]}</td>
                                <td className="px-6 py-4">{dn[did.indexOf(`${appointment.doctor_id}`)]}</td>
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
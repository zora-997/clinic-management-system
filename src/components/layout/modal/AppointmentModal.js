import React, { useContext, useState } from 'react'
import GlobalContext from '../../contexts/createContext/context'


const AppointmentModal = ({ isVisible, onClose, appointment_id, sick_id, ddate,
    setSick_id,
    doctor_id,
    sick_name,
    setSick_name,
    doctor_name,
    setDoctor_name,
    appointment_date,
    setAppointmentDate,
    appointment_time,
    setAppointmentTime,
    appointment_note,
    setAppointmentNot, }) => {

    const { deleteAppointment, updateAppointment, sickList, doctorList } = useContext(GlobalContext)




    // update appointment.
    const updateAppointmentHandler = (e) => {
        console.log(doctor_id);
        e.preventDefault();
        // aw ddate bo awa la ffeachappointment dwbara update bbinitawa
        updateAppointment({
            sick_id,
            appointment_date,
            appointment_time,
            appointment_note,
            appointment_id
        }, ddate)

        setSick_name("");
        setDoctor_name("");
        setAppointmentNot("");
        setAppointmentTime("");
        setAppointmentDate("");
        setSick_id(0);

    }

    const onSearch = (search, id) => {
        setSick_name(search)
        doctorList.map((item) => {
            if (item.doctor_id === id) {
                setDoctor_name(item.doctor_name)
            } return null;
        })
    }

    if (!isVisible) return null;
    return (
        <div className=' fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center'>
            <button className='text-white w-[770px] text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
            <div className='w-[600px] flex flex-col bg-white rounded-md p-5'>
                <div className='flex'>
                    {/** sick name start */}
                    <div className='w-full '>
                        <div className=' '>
                            <div className='flex flex-col w-full  rounded-md  '>
                                <label className='text-gray-700 mb-1'>Sick name</label>
                                <input type="text" required placeholder='Sick search' value={sick_name || ''}
                                    onChange={(e) => setSick_name(e.target.value)}
                                    autoComplete="off"
                                    className={`focus:ring-1 focus:outline-none border pl-2 p-2 w-full rounded`} />

                                {sickList && sickList.filter(itme => {
                                    const search = sick_name.toLowerCase();
                                    const sickName = itme.sick_name.toLowerCase();
                                    return search && sickName.startsWith(search) && sickName !== search
                                })
                                    // limit aka tanha 3 dana law naaway search bo aaki pshani ada
                                    .slice(0, 3)
                                    .map((itme) => {
                                        return <ul key={itme.sick_id} className='cursor-pointer bg-white hover:bg-sky-500  hover:text-white'
                                            onClick={() => { onSearch(itme.sick_name, itme.doctor_id); setSick_id(itme.sick_id); }} >
                                            <li className='border-r border-l pl-2'>{itme.sick_name}</li>
                                        </ul>
                                    })}
                            </div>
                        </div>
                    </div>
                    {/** sick name end*/}


                </div>

                <div className='flex my-3 gap-3 '>
                    <div className='w-1/2'>
                        <label className='text-gray-500 mb-1' >Date</label>
                        <input
                            type='date'
                            required
                            className='w-full focus:ring-1 focus:outline-none rounded border   p-2 '
                            value={appointment_date || ''}
                            onChange={(e) => setAppointmentDate(e.target.value)} />
                    </div>
                    <div className='w-1/2'>
                        <label className='text-gray-500 ' >Time</label>
                        <input type="time" required placeholder='Time'
                            className={`focus:ring-1 focus:outline-none border pl-2 p-2 w-full  rounded `}
                            onChange={(e) => setAppointmentTime(e.target.value)}
                            value={appointment_time || ''} />


                    </div>
                </div>

                <div className='flex mb-3'>
                    <div className='w-full '>
                        <label className='text-gray-500 mb-1' >Note</label>
                        <input
                            type='text'
                            name='sick_phone'
                            placeholder='not'
                            autoComplete="off"
                            required
                            className='w-full focus:ring-1 focus:outline-none rounded border   p-2 ' value={appointment_note || ''} onChange={(e) => setAppointmentNot(e.target.value)} />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <button onClick={(e) => { updateAppointmentHandler(e); onClose(false); }} className='border rounded-md bg-cyan-500 hover:bg-cyan-400 text-white px-8 p-1.5 my-2'>Update</button>
                    <button onClick={() => { deleteAppointment(appointment_id); onClose(false); }} className='border rounded-md bg-red-500 hover:bg-red-400 text-white   px-8 p-1.5 my-2'>Delete</button>
                </div>


            </div>
        </div>
    )
}


export default AppointmentModal
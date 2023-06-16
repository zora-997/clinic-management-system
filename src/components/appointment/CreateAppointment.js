import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../contexts/createContext/context';

const CreateAppointment = ({ ddate }) => {

    const { addAppointment, doctorList, sickList } = useContext(GlobalContext);


    /* const did = doctorList.map((d) => d.doctor_id)
    const dn = doctorList.map((d) => d.doctor_name)
    
    const sid = sickList.map((s) => s.sick_id)
    const sn = sickList.map((s) => s.sick_name) */


    const [sick_id, setSick_id] = useState(0)
    const [doctor_id, setDoctor_id] = useState(0);
    const [sick_name, setSick_name] = useState("");
    const [doctor_name, setDoctor_name] = useState("");
    const [appointment_date, setAppointmentDate] = useState("");
    const [appointment_time, setAppointmentTime] = useState("");
    const [appointment_note, setAppointmentNot] = useState("");




    // add appointment.
    const addAppointmentHandler = e => {
        e.preventDefault();
        addAppointment({
            sick_id,
            doctor_id,
            appointment_date,
            appointment_time,
            appointment_note
        }, ddate)

        setSick_name("");
        setDoctor_name("");
        setAppointmentNot("");
        setAppointmentTime("");
        setAppointmentDate("");
        setDoctor_id(0);
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
    return (

        < div className='w-[1100px] place-self-end ml-14 ' >
            <form onSubmit={(e) => addAppointmentHandler(e)} className=' bg-white rounded-md  grid p-5'>
                <div className='flex'>
                    {/** sick name start */}
                    <div className='w-1/4 mr-5'>
                        <div className='relative '>
                            <div className='flex flex-col w-full  rounded-md  absolute'>
                                <label className='text-gray-700 mb-2'>Sick name</label>
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
                                            onClick={() => { onSearch(itme.sick_name, itme.doctor_id); setSick_id(itme.sick_id); setDoctor_id(itme.doctor_id) }} >
                                            <li className='border-r border-l pl-2'>{itme.sick_name}</li>
                                        </ul>
                                    })}
                            </div>
                        </div>
                    </div>
                    {/** sick name end*/}

                    <div className='w-1/4'>
                        <label className='text-gray-500' >Date</label>
                        <input type='date' value={appointment_date || ''} required className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 ' onChange={(e) => setAppointmentDate(e.target.value)} />
                    </div>

                    <div className='w-1/4 mr-5 '>
                        <label className='text-gray-700 '>Doctor name</label>
                        {/** value = {doctor_name || ''} aw or agar da naney awa alle auncontrolled wata ama sarata null yan undefined boia aw || bo da aney ka te batallish be */}
                        <input type="text" readOnly disabled required placeholder='Doctor name' value={doctor_name || ''}
                            className={`focus:ring-1 focus:outline-none border pl-2 p-2 w-full mt-2 ml-2  rounded `} />
                    </div>
                    <div className='w-1/4'>
                        <label className='text-gray-500' >Time</label>
                        <input type="time" required placeholder='Time'
                            className={`focus:ring-1 focus:outline-none border pl-2 p-2 mt-2 w-full  rounded `}
                            onChange={(e) => setAppointmentTime(e.target.value)}
                            value={appointment_time || ''} />

                    </div>
                </div>
                <div className='flex'>


                </div>

                <div className='flex items-center'>
                    <div className=' w-1/2'>
                        <label className='text-gray-500' >Note</label>
                        <input
                            type='text'
                            name='sick_phone'
                            placeholder='note'
                            autoComplete="off"

                            value={appointment_note || ''}
                            className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 ' onChange={(e) => setAppointmentNot(e.target.value)} />
                    </div>
                    <button type='submit' className='border rounded-md bg-cyan-500 hover:bg-cyan-400 text-white w-1/2 p-2 mt-5 ml-2'>Create appointment</button>
                </div>
            </form>

        </div >

    )
}

export default CreateAppointment
import React, { useContext, useState } from 'react'
import GlobalContext from '../../contexts/createContext/context'


const AddAppointmentModal = ({ isAddVisible, onClose }) => {
    const { addAppointment, doctorList, sickList } = useContext(GlobalContext);
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
        })

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


    if (!isAddVisible) return null;
    return (
        <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>

                <form onSubmit={(e) => { addAppointmentHandler(e); onClose(false); }} className=' bg-white rounded-md  grid p-5'>
                    <div className='flex'>
                        {/** sick name start */}
                        <div className='w-3/4 mr-5'>
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

                        <div className='w-1/3'>
                            <label className='text-gray-500' >Date</label>
                            <input type='date' required className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 ' onChange={(e) => setAppointmentDate(e.target.value)} />
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-3/4 mr-5 mt-2'>
                            <label className='text-gray-700 '>Doctor name</label>
                            {/** value = {doctor_name || ''} aw or agar da naney awa alle auncontrolled wata ama sarata null yan undefined boia aw || bo da aney ka te batallish be */}
                            <input type="text" readOnly required placeholder='Doctor name' value={doctor_name || ''}
                                className={`focus:ring-1 focus:outline-none border pl-2 p-2 w-full  rounded `} />
                        </div>
                        <div className='w-1/3'>
                            <label className='text-gray-500' >Time</label>
                            <input type="time" required placeholder='Time'
                                className={`focus:ring-1 focus:outline-none border pl-2 p-2 w-full  rounded `}
                                onChange={(e) => setAppointmentTime(e.target.value)} />

                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-full '>
                            <label className='text-gray-500' >Not</label>
                            <input type='text' name='sick_phone' placeholder='not' autoComplete="off" required className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 ' onChange={(e) => setAppointmentNot(e.target.value)} />
                        </div>
                    </div>
                    <button type='submit' className='border rounded-md bg-cyan-500 hover:bg-cyan-400 text-white p-2 my-2'>Create Sick</button>
                </form>

            </div>
        </div>
    )
}
export default AddAppointmentModal
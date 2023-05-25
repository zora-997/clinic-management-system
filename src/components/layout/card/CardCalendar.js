import React, { useContext, useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import GlobalContext from '../../contexts/createContext/context';


const CardCalendar = () => {

    const { fetchDashbordAppointment } = useContext(GlobalContext);
    const [ddate, setDate] = useState(new Date());

    useEffect(() => {
        fetchDashbordAppointment(ddate.toISOString().slice(0, 10))
    }, [ddate])

    return (
        <>
            <Calendar className='scale-90 h-[17rem]  rounded-2xl shadow-sm ' onChange={(newDate) => setDate(newDate)} value={ddate} />

        </>
    )
}

export default CardCalendar
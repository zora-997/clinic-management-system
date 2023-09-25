import React, { useContext, useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import GlobalContext from '../../contexts/createContext/context';


const CardCalendar = () => {

    const { fetchDashbordAppointment } = useContext(GlobalContext);
    const [ddate, setDate] = useState(new Date().toISOString().slice(0, 10))

    useEffect(() => {
        fetchDashbordAppointment(ddate);
    }, [ddate])

    return (
        <>
            <Calendar className=' min-w-full md:min-w-0 scale-95 place-self-stretch  rounded-2xl shadow-sm ' onClickDay={(newDate) => setDate(newDate.toISOString().slice(0, 10))} />
        </>
    )
}

export default CardCalendar
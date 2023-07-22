import React, { useContext, useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import GlobalContext from '../../contexts/createContext/context';


const CardCalendar = ({ ddate, setDate }) => {

    const { fetchDashbordAppointment } = useContext(GlobalContext);

    useEffect(() => {
        console.log(ddate.toISOString().slice(0, 10));
        fetchDashbordAppointment(ddate.toISOString().slice(0, 10))
    }, [ddate])

    return (
        <>
            <Calendar className=' min-w-full md:min-w-0 scale-95 place-self-stretch  rounded-2xl shadow-sm ' onChange={(newDate) => setDate(newDate)} value={ddate} />

        </>
    )
}

export default CardCalendar
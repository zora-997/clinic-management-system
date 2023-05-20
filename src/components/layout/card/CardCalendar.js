import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CardCalendar = () => {

    const [date, setDate] = useState(new Date());

    function handleDateChange(newDate) {
        setDate(newDate);
    }
    return (
        <>
            <Calendar className='w-full h-[17rem] mr-1 z-10 bg-white rounded-3xl shadow-sm  mt-5' onChange={handleDateChange} value={date} />

        </>
    )
}

export default CardCalendar
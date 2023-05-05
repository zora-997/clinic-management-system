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
            <Calendar className='w-full h-[17rem]  bg-white rounded-3xl shadow-sm ml-6 mt-5' onChange={handleDateChange} value={date} />
            <div className='text-4xl h-[17rem] mt-5 mr-6 rounded-3xl w-[350px] z-20 font-bold absolute right-0 border-2 border-white/100'></div>

        </>
    )
}

export default CardCalendar
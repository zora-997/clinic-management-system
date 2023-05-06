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
            <Calendar className='w-full h-[17rem] mr-1 bg-white rounded-3xl shadow-sm  mt-5' onChange={handleDateChange} value={date} />
            <div className='text-4xl h-[17rem] mt-5 mr-5 rounded-3xl w-[350px]  font-bold absolute right-0 border-4 border-white'></div>

        </>
    )
}

export default CardCalendar
import React, { useState } from 'react'
import CardBody from '../card/CardBody'
import CardOne from '../card/CardOne'
import CardAppointment from '../card/CardAppointment'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Body = () => {
    const [date, setDate] = useState(new Date());

    function handleDateChange(newDate) {
        setDate(newDate);
    }

    return (
        <div className='body flex w-full justify-end mt-6 select-none'>
            < div className='flex flex-col w-[1090px] mr-6  ' >
                <CardBody />
                <div className=' flex justify-between'>
                    <CardOne />
                    <Calendar className='w-full h-[17rem]  bg-white rounded-3xl shadow-sm ml-6 mt-5' onChange={handleDateChange} value={date} />

                </div>


                <CardAppointment />
                {/* <img src={bottomImg} alt="no imgae" className='absolute top-72 w-full h-[300px] ' /> */}
            </div >





        </div>
    )
}

export default Body
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
                <div className=' flex justify-between '>
                    <CardOne />
                    <Calendar className='w-full h-[17rem] relative bg-white rounded-3xl shadow-sm ml-6 mt-5' onChange={handleDateChange} value={date} />
                    <div className='text-4xl h-[17rem] mt-5 mr-6 rounded-3xl w-[350px] z-10 font-bold absolute right-0 border-4 border-white'>

                    </div>
                </div>


                <CardAppointment />
                {/* <img src={bottomImg} alt="no imgae" className='absolute top-72 w-full h-[300px] ' /> */}
            </div >





        </div>
    )
}

export default Body
import React from 'react'
import CardBody from '../card/CardBody'
import CardOne from '../card/CardOne'
import CardAppointment from '../card/CardAppointment'
import CardCalendar from '../card/CardCalendar'


const Body = () => {


    return (
        <div className='body flex w-full justify-end mt-6 select-none'>
            < div className='flex flex-col w-[1090px] mr-4' >
                <CardBody />
                <div className='flex justify-between items-center  mt-2'>
                    <CardOne />
                    <CardCalendar />
                </div>
                <CardAppointment />

            </div >





        </div>
    )
}

export default Body
import React, { useState } from 'react'
import CardBody from '../card/CardBody'
import CardOne from '../card/CardOne'
import CardAppointment from '../card/CardAppointment'
import CardCalendar from '../card/CardCalendar'


const Body = () => {

    return (
        <div className='body  2xl:-mt-14 -mt-10  '>
            < div className='flex-1 flex-col ' >
                <CardBody />
                <div className='md:flex  gap-3 grid  mx-2 '>
                    <CardOne />
                    <CardCalendar />
                </div>
                <CardAppointment />

            </div >
        </div>
    )
}

export default Body
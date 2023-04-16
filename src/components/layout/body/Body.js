import React from 'react'
import CardBody from '../card/CardBody'
import CardOne from '../card/CardOne'

const Body = () => {
    return (
        <div className='body relative mt-14 left-60 right-0 w-[1090px]  select-none'>
            < div className='flex flex-col w-[1090px] mt-7 ' >
                <CardBody />
                <CardOne />
                {/* <img src={bottomImg} alt="no imgae" className='absolute top-72 w-full h-[300px] ' /> */}
            </div >




        </div>
    )
}

export default Body
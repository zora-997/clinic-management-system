import React from 'react'
import { FaClinicMedical } from "react-icons/fa";

const TopSideBar = () => {
    return (
        <div className='flex justify-center items-start pt-3 max-w-full  h-24'>
            <div className='text-xl gap-3 flex  justify-center items-center'>
                <FaClinicMedical size={38} className=' text-sky-500' />
                <span className=" font-medium text-2xl text-sky-400"><span className="text-yellow-300 text-2xl">Top</span>&nbsp;Clinic</span>
            </div>

        </div>



    )
}

export default TopSideBar
import React from 'react'
import { FaClinicMedical } from "react-icons/fa";

const TopSideBar = () => {
    return (
        <div className='pl-5 pt-5'>
            <div className='text-xl mb-8 flex justify-center items-center text-center'>
                <FaClinicMedical size={38} className='mr-5 pl-1 text-sky-500' />
                <span className="pt-2 font-medium text-2xl text-sky-400"><span className="text-yellow-300 text-2xl">Top</span>&nbsp;Clinic</span>
            </div>

        </div>



    )
}

export default TopSideBar
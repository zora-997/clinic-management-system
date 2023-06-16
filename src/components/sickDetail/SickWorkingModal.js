import React from 'react'
import attention from "../../img/image/attention.png";


const SickWorkingModal = ({ isVisible, setShowWorking }) => {
    if (!isVisible) return null;
    return (

        <div onClick={() => setShowWorking(false)} className=' fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center'>
            <div className='w-[450px] flex gap-3 items-center bg-white rounded-md p-5'>
                <div className='place-self-start'>
                    <img src={attention} alt='danger' />
                </div>
                <h1>This doctor have a patient !</h1>
            </div>
        </div>
    )
}

export default SickWorkingModal
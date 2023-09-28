import React, { useContext } from 'react'
import GlobalContext from '../../contexts/createContext/context'
import ButtonUpdate from '../ui/button/ButtonUpdate'
import ButtonDelete from '../ui/button/ButtonDelete'


const Modal = ({ isVisible, onClose, doctor_name, setNewName, doctor_percentage, setNewPercentage, doctor_id, }) => {
    const { updateDoctor, deleteDoctor } = useContext(GlobalContext)

    // update doctor.
    const updateDoctorHandler = (e) => {
        e.preventDefault();
        updateDoctor({ doctor_name, doctor_percentage, doctor_id });
    }

    // delete doctor
    const deletee = (e) => {
        e.preventDefault();
        deleteDoctor(doctor_id)
    }


    if (!isVisible) return null;
    return (
        <div className=' fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[400px] flex flex-col'>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
                <div className=' bg-white rounded-md p-5 grid '>
                    <label className='text-gray-500'>Name</label>
                    <input type="text" autoComplete="off" onChange={(val) => setNewName(val.target.value)} value={doctor_name} placeholder='new name' className='focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2' />
                    <label className='mt-2 text-gray-500'>Percentage</label>
                    <input type="number" autoComplete="off" onChange={(val) => setNewPercentage(val.target.value)} value={doctor_percentage} placeholder='new Percentage' className='focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2' />

                    <div className='flex justify-between'>
                        <ButtonUpdate update={updateDoctorHandler} onClose={onClose} />
                        <ButtonDelete deleteRow={deletee} onClose={onClose} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal
import React, { useContext } from 'react'
import GlobalContext from "../../contexts/createContext/context";


const SurgeryModal = ({ isVisible, onClose, surgery_type_name, setSurgey_name, surgery_type_price, setSurgey_price, surgery_type_id }) => {
    const { updateSurgery, deleteSurgery } = useContext(GlobalContext)

    // update surgery.
    const updateDoctorHandler = (e) => {
        e.preventDefault();
        updateSurgery({ surgery_type_name, surgery_type_price, surgery_type_id });
    }

    if (!isVisible) return null;
    return (
        <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[400px] flex flex-col'>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
                <div className=' bg-white rounded-md p-5 grid'>
                    <label className='text-gray-500'>Name</label>
                    <input type="text" autocomplete="off" onChange={(val) => setSurgey_name(val.target.value)} value={surgery_type_name} placeholder='new name' className='focus:ring-1 mt-1 focus:outline-none rounded border mb-3  p-2' />
                    <label className='text-gray-500'>Price</label>
                    <input type="number" autocomplete="off" onChange={(val) => setSurgey_price(val.target.value)} value={surgery_type_price} placeholder='new Percentage' className='focus:ring-1 mt-1 focus:outline-none rounded border mb-3  p-2' />

                    <div className='flex justify-between'>
                        <button onClick={(e) => { updateDoctorHandler(e); onClose(false); }} className='border rounded-md bg-cyan-500 hover:bg-cyan-400 text-white px-8 p-1.5 my-2'>Update</button>
                        <button onClick={() => { deleteSurgery(surgery_type_id); onClose(false); }} className='border rounded-md bg-red-500 hover:bg-red-400 text-white   px-8 p-1.5 my-2'>Delete</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SurgeryModal
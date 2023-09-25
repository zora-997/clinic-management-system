import React, { useContext } from 'react'
import GlobalContext from "../../contexts/createContext/context";
import ButtonUpdate from '../ui/button/ButtonUpdate';
import ButtonDelete from '../ui/button/ButtonDelete';


const SurgeryModal = ({ isVisible, onClose, surgery_type_name, setSurgey_name, surgery_type_price, setSurgey_price, surgery_type_id }) => {
    const { updateSurgery, deleteSurgery } = useContext(GlobalContext)

    // update surgery.
    const updateDoctorHandler = (e) => {
        e.preventDefault();
        updateSurgery({ surgery_type_name, surgery_type_price, surgery_type_id });
    }
    // delete work type
    const deletee = (e) => {
        e.preventDefault();
        deleteSurgery(surgery_type_id)
    }

    if (!isVisible) return null;
    return (
        <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[400px] flex flex-col'>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
                <div className=' bg-white rounded-md p-5 grid'>
                    <label className='text-gray-500'>Name</label>
                    <input type="text" autoComplete="off" onChange={(val) => setSurgey_name(val.target.value)} value={surgery_type_name} placeholder='Working Type' className='focus:ring-1 mt-1 focus:outline-none rounded border mb-3  p-2' />
                    <label className='text-gray-500'>Price</label>
                    <input type="number" autoComplete="off" onChange={(val) => setSurgey_price(val.target.value)} value={surgery_type_price} placeholder='0.00' className='focus:ring-1 mt-1 focus:outline-none rounded border mb-3  p-2' />

                    <div className='flex justify-between'>
                        <ButtonUpdate update={updateDoctorHandler} onClose={onClose} />
                        <ButtonDelete deleteRow={deletee} onClose={onClose} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SurgeryModal
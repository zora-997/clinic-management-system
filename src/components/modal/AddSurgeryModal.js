import React, { useState, useContext } from 'react'
import GlobalContext from "../../contexts/createContext/context";
import ButtonAdd from '../ui/button/ButtonAdd';


const AddSurgeryModal = ({ isAddVisible, onClose }) => {

    const { addSurgeryType } = useContext(GlobalContext)
    const [surgery_type_name, setSurgery_type_name] = useState("");
    const [surgery_type_price, setSurgery_type_price] = useState(0);


    let surgery_type_date = (new Date().toISOString().slice(0, 10));


    // add doctor.
    const addSurgeryHandler = e => {
        e.preventDefault();
        addSurgeryType({ surgery_type_name, surgery_type_price, surgery_type_date });
    }

    if (!isAddVisible) return null;

    return (
        <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[500px] flex flex-col'>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
                <form onSubmit={(e) => { addSurgeryHandler(e); onClose(false); }} className=' bg-white rounded-md p-5 grid'>
                    <div className='flex justify-between mb-3'>
                        <div className='w-3/4 mr-5'>
                            <label className='text-gray-500'>Name</label>
                            <input type='text' name='surgery_type_name' autoComplete="off" placeholder='Working Type' required className="w-full focus:ring-1 focus:outline-none rounded border  mt-2 mb-3 p-2" onChange={(e) => setSurgery_type_name(e.target.value)} />
                        </div>
                        <div className='w-1/3'>
                            <label className='text-gray-500'>Price</label>
                            <input type='number' name='surgery_type_price' autoComplete="off" placeholder='0.00' required className="w-full focus:ring-1 focus:outline-none rounded border  mt-2 mb-3 p-2" onChange={(e) => setSurgery_type_price(e.target.value)} />
                        </div>
                    </div>

                    {/* zya krdni Working Type */}
                    <ButtonAdd add="Add Working Type" />
                </form>
            </div>
        </div>

    )
}

export default AddSurgeryModal
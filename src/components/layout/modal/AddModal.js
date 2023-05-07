import React, { useContext, useState } from 'react'
import GlobalContext from '../../contexts/createContext/context'


const AddModal = ({ isAddVisible, onClose }) => {
    const { addDoctor } = useContext(GlobalContext)

    const [doctor_name, setDoctor_name] = useState("");
    const [doctor_percentage, setDoctor_percentage] = useState(0);
    // const [doctor_date, setDoctor_date] = useState("");
    let doctor_date = (new Date().toISOString().slice(0, 10));


    // add doctor.
    const addDoctorHandler = e => {
        e.preventDefault();
        addDoctor({ doctor_name, doctor_percentage, doctor_date });
    }

    if (!isAddVisible) return null;
    return (
        <div className='fixed  z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
            <div className='w-[500px] flex flex-col '>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
                <form onSubmit={(e) => { addDoctorHandler(e); onClose(false); }} className=' bg-white rounded-md  grid p-5'>
                    <div className='flex justify-between'>
                        <div className='relative w-3/4 mr-5'>
                            <label className='text-gray-500'>Name</label>
                            <input type='text' name='doctor_name' autoComplete="off" placeholder='D.name' required className=" block w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2" onChange={(val) => setDoctor_name(val.target.value)} />

                        </div>
                        <div className='w-1/3'>
                            <label className='text-gray-500'>Percentage</label>
                            <input type='number' name='doctor_percentage' autoComplete="off" placeholder='0.00' required className="block w-full focus:ring-1 focus:outline-none rounded border  mt-2 mb-3 p-2" onChange={(val) => setDoctor_percentage(val.target.value)} />
                        </div>

                    </div>


                    <button type='submit' className='border rounded-md bg-cyan-500 hover:bg-cyan-400 text-white p-2 my-2'>create</button>
                </form>

            </div>
        </div>
    )
}
export default AddModal
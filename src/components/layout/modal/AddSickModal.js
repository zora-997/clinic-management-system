import React, { useContext, useState } from 'react'
import GlobalContext from "../../contexts/createContext/context";
export const AddSickModal = ({ isAddVisible, onClose }) => {

    const { addSick, doctorList } = useContext(GlobalContext);
    const [sick, setSick] = useState({
        sick_name: "",
        sick_phone: "",
        sick_age: 0,
        sick_gender: "",
        doctor_id: "",
        sick_date: ""
    });

    // input change
    const onInputChange = e => setSick({ ...sick, [e.target.name]: e.target.value })

    // add Sick.
    const addSickrHandler = e => {
        e.preventDefault();
        addSick(sick);
    }


    if (!isAddVisible) return null;
    return (
        <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>

                <form onSubmit={(e) => { addSickrHandler(e); onClose(false); }} className=' bg-white rounded-md  grid p-5'>
                    <div className='flex'>
                        <div className='w-3/4 mr-5'>
                            <label className='text-gray-500' >Name</label>
                            <input type='text' name='sick_name' placeholder='Name' autoComplete="off" required className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 ' onChange={onInputChange} />
                        </div>
                        <div className='w-1/3'>
                            <label className='text-gray-500' >Age</label>
                            <input type='number' name='sick_age' placeholder='age' autoComplete="off" required className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 ' onChange={onInputChange} />
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-3/4 mr-5'>
                            <label className='text-gray-500' >Phone</label>
                            <input type='text' name='sick_phone' placeholder='Phone' autoComplete="off" required className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 ' onChange={onInputChange} />
                        </div>
                        <div className='w-1/3'>
                            <label className='text-gray-500' >Gender</label>
                            <select name='sick_gender' placeholder='Gender' required onChange={onInputChange} className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 '>
                                <option></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-3/4 mr-5'>
                            <label className='text-gray-500' >Doctor</label>
                            <select name='doctor_id' required onChange={onInputChange} className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 '>
                                <option></option>
                                {doctorList.map((doctor) => {
                                    return <option key={doctor.doctor_id} value={`${doctor.doctor_id}`}>{doctor.doctor_name}</option>
                                })}
                            </select>
                        </div>
                        <div className='w-1/3'>
                            <label className='text-gray-500' >Date</label>
                            <input type='date' name='sick_date' autoComplete="off" placeholder='Sick Date' required className="w-full rounded border my-2 p-1.5" onChange={onInputChange} />
                        </div>
                    </div>
                    <button type='submit' className='border rounded-md bg-cyan-500 hover:bg-cyan-400 text-white p-2 my-2'>Create Sick</button>
                </form>

            </div>
        </div>
    )
}

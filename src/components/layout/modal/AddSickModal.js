import React, { useContext, useState } from 'react'
import GlobalContext from "../../contexts/createContext/context";
export const AddSickModal = ({ isAddVisible, onClose }) => {

    const { addSick, doctorList } = useContext(GlobalContext);
    let sick_date = (new Date().toISOString().slice(0, 10));
    const [sick_name, setSick_name] = useState("");
    const [sick_phone, setSick_phone] = useState("");
    const [sick_age, setSick_age] = useState(0);
    const [sick_gender, setSick_gender] = useState("male");
    const [doctor_id, setDoctor_id] = useState(0);



    // add Sick.
    const addSickrHandler = e => {
        e.preventDefault();

        addSick({ sick_name, sick_phone, sick_age, sick_gender, doctor_id, sick_date });

        setSick_name("")
        setSick_phone("")
        setSick_age(0)
        setSick_gender("male")
        setDoctor_id(0)


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
                            <input type='text' name='sick_name' placeholder='Name' autoComplete="off" required className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 ' onChange={(e) => setSick_name(e.target.value)} />
                        </div>
                        <div className='w-1/3'>
                            <label className='text-gray-500' >Age</label>
                            <input type='number' name='sick_age' placeholder='age' autoComplete="off" required className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 ' onChange={(e) => setSick_age(e.target.value)} />
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-3/4 mr-5'>
                            <label className='text-gray-500' >Phone</label>
                            <input type='text' name='sick_phone' placeholder='Phone' autoComplete="off" required className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 ' onChange={(e) => setSick_phone(e.target.value)} />
                        </div>
                        <div className='w-1/3'>
                            <label className='text-gray-500' >Gender</label>
                            <select name='sick_gender' placeholder='Gender' required onChange={(e) => setSick_gender(e.target.value)} className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 '>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-3/4 mr-5'>
                            <label className='text-gray-500' >Doctor</label>
                            <select required onChange={(e) => { setDoctor_id(e.target.value) }} className='w-full focus:ring-1 focus:outline-none rounded border  p-2 '>
                                <option></option>
                                {doctorList.map((doctor) => {
                                    return <option key={doctor.doctor_id} value={`${doctor.doctor_id}`}>{doctor.doctor_name}</option>
                                })}
                            </select>
                        </div>
                        <div className='w-1/3 place-self-end'>
                            <button type='submit' className='border w-full rounded-md bg-cyan-500 hover:bg-cyan-400 text-white p-2 '>Create Patient</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

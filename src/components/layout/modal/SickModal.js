import React, { useContext } from 'react'
import GlobalContext from '../../contexts/createContext/context'


const SickModal = ({
    isVisible,
    onClose,
    sick_name,
    setSick_name,
    sick_phone,
    setSick_phone,
    sick_id,
    sick_age,
    setSick_age,
    sick_gender,
    setSick_gender,
    setDoctor_id,
    doctor_id,
    doctor_name
}) => {

    const { updateSick, deleteSick, doctorList } = useContext(GlobalContext)

    // update doctor.
    const updateSickHandler = (e) => {
        e.preventDefault();
        updateSick({ sick_id, doctor_id, sick_name, sick_phone, sick_age, sick_gender });
    }

    if (!isVisible) return null;
    return (
        <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] flex flex-col'>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
                <div className=' bg-white rounded-md p-4 grid'>

                    {/** start div input and age */}
                    <div className='flex'>
                        <div className='w-3/4 mr-4'>
                            <label className='text-gray-500'>Name</label>
                            <input type="text" autoComplete="off" onChange={(val) => setSick_name(val.target.value)} value={sick_name} placeholder='new name' className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 ' />
                        </div>
                        <div className='w-1/3'>
                            <label className='text-gray-500'>Age</label>
                            <input type="number" autoComplete="off" onChange={(val) => setSick_age(val.target.value)} value={sick_age} placeholder='new age' className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2' />
                        </div>
                    </div>
                    {/** end div input and age */}

                    <div className='flex'>
                        <div className='w-3/4 mr-4'>
                            <label className='text-gray-500' >Doctor</label>
                            <select required onChange={(e) => setDoctor_id(e.target.value)} value={doctor_id} className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 '>
                                {doctorList.map((doctor) => {
                                    return <option key={doctor.doctor_id} value={`${doctor.doctor_id}`}>{doctor.doctor_name}</option>
                                })}
                            </select>
                        </div>
                        <div className='w-1/3'>
                            <label className='text-gray-500'>Gender</label>
                            <select name='sick_gender' placeholder='Gender' required onChange={(e) => setSick_gender(e.target.value)} value={sick_gender} className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 '>
                                {sick_gender === "male" ?
                                    <>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </> :
                                    <>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                    </>
                                }

                            </select>
                        </div>
                    </div>


                    <div className=''>
                        <label className='text-gray-500'>Phone</label>
                        <input type="text" autoComplete="off" onChange={(val) => setSick_phone(val.target.value)} value={sick_phone} placeholder='new phone' className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2' />
                    </div>


                    <div className='flex justify-between mt-2'>
                        <button onClick={(e) => { updateSickHandler(e); onClose(false); }} className='border rounded-md bg-cyan-500 hover:bg-cyan-400 text-white px-8 p-1.5 '>Update</button>
                        <button onClick={() => { deleteSick(sick_id); onClose(false); }} className='border rounded-md bg-red-500 hover:bg-red-400 text-white p-1.5 px-9 '>Delete</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SickModal
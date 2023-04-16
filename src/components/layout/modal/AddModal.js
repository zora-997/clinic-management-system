import React, { useContext, useState } from 'react'
import GlobalContext from '../../contexts/createContext/context'


const AddModal = ({ isAddVisible, onClose }) => {
    const { addDoctor } = useContext(GlobalContext)

    const [doctor_name, setDoctor_name] = useState("");
    const [doctor_percentage, setDoctor_percentage] = useState(0);
    const [doctor_date, setDoctor_date] = useState("");


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
                            {/* <input
                                type="text"
                                class="peer  block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlInputText"
                                placeholder="Example label" />
                            <label
                                for="exampleFormControlInputText"
                                class="peer-focus:bg-white pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                            >Text input
                            </label> */}
                        </div>
                        <div className='w-1/3'>
                            <label className='text-gray-500'>Percentage</label>
                            <input type='number' name='doctor_percentage' autoComplete="off" placeholder='D.percentage' required className="block w-full focus:ring-1 focus:outline-none rounded border  mt-2 mb-3 p-2" onChange={(val) => setDoctor_percentage(val.target.value)} />
                        </div>

                    </div>
                    <label className='text-gray-500'>Date</label>
                    <input type='date' name='doctor_date' autoComplete="off" placeholder='D.date' required className="focus:ring-1 focus:outline-none rounded border  mt-2 mb-3 p-2" onChange={(val) => setDoctor_date(val.target.value)} />

                    <button type='submit' className='border rounded-md bg-cyan-500 hover:bg-cyan-400 text-white p-2 my-2'>create</button>
                </form>

            </div>
        </div>
    )
}
export default AddModal
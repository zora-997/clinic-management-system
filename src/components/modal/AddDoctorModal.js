import React, { useContext, useState } from 'react'
import GlobalContext from '../../contexts/createContext/context'
import ButtonAdd from '../ui/button/ButtonAdd';
import Modal from '../ui/modal/Modal';


const AddModal = ({ isAddVisible, onClose }) => {
    const { addDoctor } = useContext(GlobalContext)

    const [doctor_name, setDoctor_name] = useState("");
    const [doctor_percentage, setDoctor_percentage] = useState(0);
    const [doctor_username, setDoctor_username] = useState(0);
    const [doctor_password, setDoctor_password] = useState("");


    let doctor_date = (new Date().toISOString().slice(0, 10));


    // add doctor.
    const addDoctorHandler = e => {
        e.preventDefault();
        addDoctor({ doctor_name, doctor_percentage, doctor_date });
    }

    if (!isAddVisible) return null;
    return (
        <Modal>
            <div className='   flex flex-col '>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
                <form onSubmit={(e) => { addDoctorHandler(e); onClose(false); }} className=' bg-white rounded-md 2xl:w-[700px]   flex flex-col  p-5'>
                    <div className='flex justify-between'>
                        <div className='relative w-3/4 mr-5'>
                            <label className='text-gray-500 2xl:text-2xl'>Name</label>
                            <input
                                type='text'
                                name='doctor_name'
                                autoComplete="off"
                                placeholder='Dr.name'
                                required
                                className=" block 2xl:placeholder:text-2xl 2xl:text-2xl w-full focus:ring-1 focus:outline-none rounded border mb-3 2xl:mb-0 mt-2 p-2 2xl:p-4"
                                onChange={(val) => setDoctor_name(val.target.value)} />
                        </div>
                        <div className='w-1/3'>
                            <label className='text-gray-500 2xl:text-2xl'>Percentage</label>
                            <input
                                type='number'
                                name='doctor_percentage'
                                autoComplete="off"
                                placeholder='0.00'
                                required
                                className="block 2xl:placeholder:text-2xl 2xl:text-2xl w-full focus:ring-1 focus:outline-none rounded border  mt-2 mb-3 2xl:mb-0 p-2 2xl:p-4"
                                onChange={(val) => setDoctor_percentage(val.target.value)} />
                        </div>

                    </div>

                    <div className='relative w-full'>
                        <label className='text-gray-500 2xl:text-2xl'>Username</label>
                        <input
                            type='text'
                            autoComplete="off"
                            placeholder='username'
                            className=" block 2xl:placeholder:text-2xl 2xl:text-2xl w-full focus:ring-1 focus:outline-none rounded border mb-3 2xl:mb-0 mt-2 p-2 2xl:p-4"
                            onChange={(val) => setDoctor_username(val.target.value)} />
                    </div>
                    <div className='relative w-full'>
                        <label className='text-gray-500 2xl:text-2xl'>Password</label>
                        <input
                            type='password'
                            autoComplete="off"
                            placeholder='password'
                            className=" block 2xl:placeholder:text-2xl 2xl:text-2xl w-full focus:ring-1 focus:outline-none rounded border mb-3 2xl:mb-0 mt-2 p-2 2xl:p-4"
                            onChange={(val) => setDoctor_password(val.target.value)} />
                    </div>
                    <ButtonAdd add="Add Doctor" />
                </form>

            </div>
        </Modal>
    )
}
export default AddModal
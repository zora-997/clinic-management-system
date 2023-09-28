import React, { useContext } from 'react'
import GlobalContext from '../../contexts/createContext/context'
import ButtonAdd from '../ui/button/ButtonAdd'
import Modal from '../ui/modal/Modal'

const AddUser = ({ isAddVisible, onClose, admin_name, setAdminName, admin_password, setAdminPassword, admin_role, setAdminRole }) => {

    const { addUser } = useContext(GlobalContext)

    // add user.
    const addUserHandler = e => {
        e.preventDefault();
        addUser({ admin_name, admin_password, admin_role });
    }

    if (!isAddVisible) return null;
    return (
        <Modal>
            <div className='   flex flex-col '>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
                <form onSubmit={(e) => { addUserHandler(e); onClose(false); }} className=' bg-white rounded-md 2xl:w-[700px] w-[500px]   flex flex-col  p-5'>

                    <div className='flex flex-col'>
                        <div className=' '>
                            <label className='text-gray-500 2xl:text-2xl'>Name</label>
                            <input
                                type='text'
                                autoComplete="off"
                                placeholder='name'
                                required
                                className=" block 2xl:placeholder:text-2xl 2xl:text-2xl w-full focus:ring-1 focus:outline-none rounded border mb-3 2xl:mb-0 mt-2 p-2 2xl:p-4"
                                onChange={(val) => setAdminName(val.target.value)} />

                        </div>
                        <div className='w-full'>
                            <label className='text-gray-500 2xl:text-2xl'>Password</label>
                            <input
                                type='password'
                                autoComplete="off"
                                placeholder='password'
                                required
                                className="block 2xl:placeholder:text-2xl 2xl:text-2xl w-full focus:ring-1 focus:outline-none rounded border  mt-2 mb-3 2xl:mb-0 p-2 2xl:p-4"
                                onChange={(val) => setAdminPassword(val.target.value)} />
                        </div>

                    </div>
                    <div className='flex gap-3 mt-1'>
                        <div className='w-full'>

                            <label className='text-gray-500 2xl:text-2xl'>Rloe</label>
                            <select
                                required
                                onChange={(e) => setAdminRole(e.target.value)}

                                className='2xl:placeholder:text-2xl 2xl:text-2xl w-full focus:ring-1 focus:outline-none rounded border    2xl:mb-0 p-2 2xl:p-4 '>
                                <option></option>
                                <option value="reception">reception</option>
                                <option value="admin">admin</option>
                            </select>
                        </div>

                        <div className='w-full place-self-end'>
                            <ButtonAdd add="Add User" />
                        </div>
                    </div>


                </form>

            </div>

        </Modal>
    )
}

export default AddUser
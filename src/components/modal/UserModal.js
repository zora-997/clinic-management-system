import React, { useContext } from 'react'
import GlobalContext from '../../contexts/createContext/context';
import ButtonUpdate from '../ui/button/ButtonUpdate';
import ButtonDelete from '../ui/button/ButtonDelete';

const UserModal = ({ isVisible, onClose, admin_id, admin_name, setAdminName, admin_password, setAdminPassword, admin_role, setAdminRole }) => {

    const { updateUser, deleteUser } = useContext(GlobalContext)

    // update user.
    const updateUserHandler = (e) => {
        e.preventDefault();
        updateUser({ admin_id, admin_name, admin_password, admin_role });
    }
    // delete user.
    const deletee = (e) => {
        e.preventDefault();
        deleteUser(admin_id);
    }


    if (!isVisible) return null;
    return (
        <div className='fixed  z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
            <div className='   flex flex-col '>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
                <form onSubmit={(e) => { updateUserHandler(e); onClose(false); }} className=' bg-white rounded-md 2xl:w-[700px] w-[500px]   flex flex-col  p-5'>

                    <div className='flex flex-col'>
                        <div className=' '>
                            <label className='text-gray-500 2xl:text-2xl'>Name</label>
                            <input
                                type='text'
                                autoComplete="off"
                                placeholder='name'
                                required
                                value={admin_name}
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
                                value={admin_password}
                                className="block 2xl:placeholder:text-2xl 2xl:text-2xl w-full focus:ring-1 focus:outline-none rounded border  mt-2 mb-3 2xl:mb-0 p-2 2xl:p-4"
                                onChange={(val) => setAdminPassword(val.target.value)} />
                        </div>

                    </div>
                    <div className='w-full '>
                        <div className='w-full '>
                            <label className='text-gray-500'>Role</label>
                            <select
                                required
                                onChange={(e) => setAdminRole(e.target.value)}
                                value={admin_role}
                                className='2xl:placeholder:text-2xl 2xl:text-2xl w-full focus:ring-1 focus:outline-none rounded border  mt-1  2xl:mb-0 p-2 2xl:p-4 '>
                                <option value="reception">reception</option>
                                <option value="admin">admin</option>
                            </select>
                        </div>

                        <div className='flex gap-3 w-full justify-between'>
                            <ButtonUpdate update={updateUserHandler} onClose={onClose} />
                            <ButtonDelete deleteRow={deletee} onClose={onClose} />
                        </div>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default UserModal
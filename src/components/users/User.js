import React, { useContext, useState } from 'react'
import GlobalContext from '../contexts/createContext/context';
import AddUserModal from '../layout/modal/AddUserModal';
import UserModal from '../layout/modal/UserModal';

export const User = () => {

    const { userList, searchUser } = useContext(GlobalContext);

    const [admin_id, setAdmin_id] = useState(0);
    const [admin_name, setAdminName] = useState("");
    const [admin_password, setAdminPassword] = useState("");
    const [admin_role, setAdminRole] = useState("");

    const [show, setShow] = useState(false);
    const [addshow, setAddShow] = useState(false);


    return (

        <div className=" select-none">

            <UserModal isVisible={show} onClose={setShow} admin_id={admin_id} admin_name={admin_name} setAdminName={setAdminName} admin_password={admin_password} setAdminPassword={setAdminPassword} admin_role={admin_role} setAdminRole={setAdminRole} />
            <AddUserModal isAddVisible={addshow} onClose={setAddShow} admin_name={admin_name} setAdminName={setAdminName} admin_password={admin_password} setAdminPassword={setAdminPassword} admin_role={admin_role} setAdminRole={setAdminRole} />
            <div className=' bg-white overflow-auto mx-3  mt-10 rounded-md  p-5 '>
                <div className='place-self-start'>
                    <button onClick={() => setAddShow(true)} className={`
                     text-white shadow-sm flex items-center shadow-gray-300 border mb-2 
                      hover:text-cyan-400 border-cyan-300 h-fit p-1 px-9 rounded-md bg-cyan-500 hover:bg-transparent duration-200`}>Create User</button>
                </div>
                <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
                    <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">Id</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Password</th>
                            <th scope="col" className="px-6 py-3">role</th>
                        </tr>
                    </thead>
                    <tbody>


                        {searchUser(userList).map((user, index) => {
                            return <tr key={index} onClick={() => { setShow(true); setAdminName(user.admin_name); setAdminPassword(user.admin_password); setAdmin_id(user.admin_id); setAdminRole(user.admin_role) }}
                                className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                                <th scope='row' className="px-5 py-4">&nbsp;&nbsp;{index + 1}</th>
                                <td className="px-6 py-4">{user.admin_name}</td>
                                <td className="px-6 py-4">{user.admin_password}</td>
                                <td className="px-6 py-4">{user.admin_role}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User

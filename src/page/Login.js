import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import login from "../img/image/login.gif";
//import { RxLockClosed, RxPerson } from "react-icons/rx";
import { TiLockClosed, TiUser } from "react-icons/ti";
import { GiHospitalCross } from "react-icons/gi";
import GlobalContext from '../components/contexts/createContext/context';


const Login = () => {
    const history = useNavigate();
    const { adminList } = useContext(GlobalContext)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameerror, setUsernameerror] = useState("");
    const [passerror, setPasserror] = useState("");
    const [show, setShow] = useState(false);
    const [showPass, setShowPass] = useState(false);


    const validate = () => {
        const errors = {};

        if (username === '') {
            errors.username = 'username rquired';
        }
        else if (username !== "rasan") {
            console.log(username);
            setShow(true)
            errors.username = 'incorrect username'
        }
        if (password === '') {
            errors.password = 'password rquired';
        }
        else if (password !== "12345") {
            console.log(password);
            setShowPass(true)
            errors.password = 'incorrect password'
        }

        return Object.keys(errors).length === 0 ? null : errors;
    }

    useEffect(() => {
        setShow(false)
        setShowPass(false)
    }, [!username, !password])

    console.log('username ' + username);

    const handelLogin = (e) => {
        e.preventDefault();

        const errors = validate();

        if (errors) {
            setUsernameerror(errors.username);
            setPasserror(errors.password);
        } else {
            // const adminId = adminList.map(admin => admin.admin_name === username && admin.admin_id).filter(f => f !== false);
            // console.log(adminId[0]);

            setUsernameerror("");
            setPasserror("");
            history("/dashbord")

        }



    }


    return (
        <div className="select-none bg-gradient-to-r from-sky-300  to-white w-full h-screen flex items-center justify-center">
            <div className='rounded-md shadow-xl w-[900px] h-[500px] bg-gradient-to-l from-sky-300 via-white to-white flex flex-row justify-between '>

                {/** logo login */}
                <div className='relative'>
                    <GiHospitalCross size={40} className='text-sky-400 bordern absolute top-3 left-[87px]' />


                </div>

                {/* div lay chap */}
                <div className='w-[300px] flex flex-col mt-[120px]'>

                    <p className='font-bold text-sky-400 border-b-2 w-20 text-center pb-2 border-b-sky-300 text-2xl mb-10'>Login</p>
                    <form onSubmit={handelLogin}>
                        <div className='relative w-full'>
                            <input type='text' onChange={(e) => setUsername(e.target.value)} placeholder='username'
                                className={`${(usernameerror === 'username rquired' && username === '') || (usernameerror === 'incorrect username' && username !== '') ? 'border-red-500' : 'border-sky-500'}
                                     w-full placeholder-slate-200 pl-12   mb-8 py-1.5 px-1 bg-white  rounded-xl focus:ring-0 focus:border-sky-500 border focus:outline-none shadow-sm shadow-sky-100 peer`} />
                            <TiUser size={25} className={` absolute top-2 ml-2 pointer-events-none text-sky-400 border-sky-300`} />

                            {username === '' && <p className='text-red-500 absolute top-10 ml-2'>{usernameerror}</p>}
                            {show ? <p className='text-red-500 absolute top-10 ml-2'>{usernameerror}</p> : null}



                        </div>

                        <div className='relative w-full'>
                            <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password'
                                className={`${(passerror === 'password rquired' && password === "") || (passerror === 'incorrect password' && password !== '') ? 'border-red-500' : 'border-sky-500'} w-full placeholder-slate-200 pl-12  mb-8 py-1.5 px-1 bg-white  rounded-xl focus:ring-0 border focus:border-sky-500 focus:outline-none shadow-sm shadow-sky-100`} />
                            <TiLockClosed size={23} className=' absolute top-2 ml-2 pointer-events-none text-sky-400' />
                            {password === '' && <p className='text-red-500 absolute top-10 ml-2'>{passerror}</p>}
                            {showPass ? <p className='text-red-500 absolute top-10 ml-2'>{passerror}</p> : null}
                        </div>

                        <button type='submit' className='py-1 w-full shadow-md rounded-xl text-white text-xl text-center bg-gradient-to-r from-sky-400 via-sky-300 to-slate-50 border-sky-200 border-r-2 ' > Login</button>
                    </form>
                </div>

                {/* div lay rast */}
                <div className='max-w-sm bg-transparent flex flex-col mt-16 mr-10 '>
                    <img src={login} alt='im' className='bg-transparent ' />

                </div>

            </div >
        </div >
    )
}

export default Login
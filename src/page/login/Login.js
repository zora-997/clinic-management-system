import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import login from "../../assets/image/login.gif";
//import { RxLockClosed, RxPerson } from "react-icons/rx";
import { TiLockClosed, TiUser } from "react-icons/ti";
import { GiHospitalCross } from "react-icons/gi";
import api from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css"
import { motion } from "framer-motion"



const Login = () => {


    const history = useNavigate();

    const [admin_name, setUsername] = useState("");
    const [admin_password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    //   fetch admin
    const fetchAdmin = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(admin_name, admin_password);
        const res = await api.post('admin/login.php', { "admin_name": admin_name, "admin_password": admin_password });
        if (res.data.status === "ok") {
            setLoading(false)
            localStorage.setItem("data", JSON.stringify(res.data))
            const user = localStorage.getItem("data")
            //console.log(JSON.parse(user));

            history("/main", { state: user })

        } else {

            toast.error(res.data.message, {
                className: "error-toast",
                draggable: true,
                position: toast.POSITION.TOP_RIGHT
            })
            setLoading(false)
        }

    }

    return (
        <div>
            <ToastContainer limit={2} />
            <div className="select-none bg-gradient-to-r from-sky-300  to-white  w-full h-screen flex items-center justify-center overflow-hidden">
                {/* <div className='w-80 h-[400px] rounded-full bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 absolute -left-32 -top-10' ></div>
                <div className='w-96 h-48 rounded-full bg-gradient-to-r from-yellow-200 via-green-200 to-green-300  absolute -left-14 top-0' ></div> */}

                <div className='relative overflow-hidden bg-gradient-to-l from-sky-300 via-white to-white  h-64 mx-2 px-2 w-fit md:w-[700px] md:h-[300px] lg:w-[900px] lg:h-2/3 xl:w-[1050px] xl:h-3/4 2xl:w-[1300px] 2xl:h-3/4 bg-white flex items-center   justify-between shadow-xl rounded-md'>
                    {/* <div className='w-40 h-[200px] rounded-full bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 absolute -right-14 -bottom-5 overflow-hidden' ></div>
                    <div className='w-56 h-28 rounded-full bg-gradient-to-r from-yellow-200 via-green-200 to-green-300  absolute -right-7 -bottom-5 overflow-hidden' ></div> */}
                    {/* div lay chap */}
                    <div className='flex flex-col mx-auto  w-full md:max-w-xs lg:max-w-sm xl:max-w-md'>
                        {/** logo login */}
                        <motion.div
                            animate={{
                                y: 10,
                                opacity: 1,
                            }}
                            initial={{
                                y: -100,
                                opacity: 0.1
                            }}

                            transition={{
                                duration: 1
                            }}
                            className='absolute top-0 md:top-0.5 lg:top-1.5 xl:top-2.5 h-full'>
                            <GiHospitalCross size={30} className='text-sky-500   scale-75 md:scale-90 lg:scale-100 xl:scale-125 ' />
                        </motion.div>

                        <form onSubmit={fetchAdmin} className='flex flex-col gap-2 md:gap-4 lg:gap-8  w-full'>
                            <motion.div
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                initial={{
                                    x: -100,
                                    // opacity: 0.1
                                }}

                                transition={{
                                    duration: 1
                                }}
                            >
                                <p className='font-bold text-sky-400  w-12 xl:w-20 lg:w-16 tracking-wider
                             text-start pb-2  text-md lg:text-xl xl:text-2xl  '>
                                    Login
                                </p>
                                <motion.div
                                    animate={{
                                        x: 0,
                                        opacity: 1,
                                    }}
                                    initial={{
                                        x: -100,
                                        opacity: 0.1
                                    }}

                                    transition={{
                                        duration: 1.2
                                    }}
                                    className='border-t-2 border-t-sky-400  w-12 xl:w-20 lg:w-16'>
                                </motion.div>
                            </motion.div>

                            {/** username input */}
                            <motion.div
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                initial={{
                                    x: -100,
                                    opacity: 0.1
                                }}

                                transition={{
                                    duration: 1.5
                                }}
                                className='relative '>
                                <input type='text' onChange={(e) => setUsername(e.target.value)} placeholder='username'
                                    className={`${admin_name && 'border-b-2 border-b-sky-400'}
                                     w-full placeholder-slate-400 pl-12 placeholder:text-sm md:placeholder:text-md lg:placeholder:text-lg py-0.5 md:py-1 lg:py-1.5 px-1 
                                  focus:ring-0  focus:border-sky-400 focus:outline-none focus:placeholder:text-gray-300  border-b-2  border-b-gray-300   `} />
                                <TiUser size={25} className={`absolute top-0.5 md:top-1 lg:top-1.5 ml-2  text-sky-400 border-sky-400`} />
                            </motion.div>

                            {/** password input */}
                            <motion.div
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                initial={{
                                    x: -100,
                                    opacity: 0.1
                                }}

                                transition={{
                                    duration: 1.8
                                }}
                                className='relative '>
                                <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password'
                                    className={`${admin_password && 'border-b-2 border-b-sky-400'} first-letter: w-full placeholder-slate-400 pl-12 placeholder:text-sm md:placeholder:text-md lg:placeholder:text-lg py-0.5 md:py-1 lg:py-1.5 px-1 
                                  focus:ring-0  focus:border-sky-400 focus:outline-none focus:placeholder:text-gray-300 border-b-2  border-b-gray-300 `} />
                                <TiLockClosed size={23} className=' absolute top-0.5 md:top-1 lg:top-2 ml-2 pointer-events-none text-sky-400' />
                            </motion.div>

                            {/** button login */}
                            <motion.div
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                initial={{
                                    x: -100,
                                    opacity: 0.1
                                }}

                                transition={{
                                    duration: 2.1
                                }}
                                className='w-full'
                            >
                                <button
                                    type='submit'
                                    className={`border border-sky-300 py-0.5 md:py-1 lg:py-1.5 shadow-md rounded-3xl text-white
                                 text-md md:text-lg xl:text-xl tracking-wider text-center bg-sky-400
                                  hover:bg-sky-300 transition duration-300 w-full  `} >
                                    Login
                                </button>
                            </motion.div>
                            {/* <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-blue-700 hover:text-yellow-400">
                                Hover Me
                            </button> */}

                        </form>

                    </div>

                    {/* div lay rast */}
                    <div className=' bg-transparent hidden md:block mx-auto'>
                        <img src={login} alt='im' className='bg-transparent max-w-xs lg:max-w-sm xl:max-w-md ' />
                    </div>

                </div >
            </div >

            {loading &&
                <div className='absolute top-[40%] left-[50%] bg-white/60 p-1 rounded  border-l border-l-sky-100 '>
                    <h1 className='text-xl tracking-wider'>Loding...</h1>
                </div>
            }

        </div >
    )
}

export default Login
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import login from "../../assets/image/login.gif";
//import { RxLockClosed, RxPerson } from "react-icons/rx";
import { TiLockClosed, TiUser } from "react-icons/ti";
import { GiHospitalCross } from "react-icons/gi";
import api from "../../api/api";



const Login = () => {


    const history = useNavigate();

    const [admin_name, setUsername] = useState("");
    const [admin_password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);





    //   feach admin
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
            setShow(true)
            setError(res.data.message)
            setLoading(false)
        }

    }

    return (
        <div className=' bg-purple-400 max-w-full'>


            {/** alert */}
            <div className={`p-3 mt-2 w-full h-[10] ${!show && '-top-16'} ${show && '-top-2 duration-300'} flex justify-between place-self-center mb-4 absolute text-sm text-red-600 rounded bg-red-100 `} role="alert">
                <span className="font-medium">{error}</span>
                <span onClick={() => setShow(false)} className="font-medium text-2xl cursor-pointer">×</span>
            </div>


            <div className="select-none bg-gradient-to-r from-sky-300  to-white w-full h-screen flex items-center justify-center">

                <div className='relative h-64 mx-2 px-2 w-fit md:w-[700px] md:h-[300px] lg:w-[900px] lg:h-2/3 xl:w-[1050px] xl:h-3/4 2xl:w-[1300px] 2xl:h-3/4 bg-gradient-to-l from-sky-300 via-white to-white flex items-center   justify-between shadow-xl rounded-md'>

                    {/* div lay chap */}
                    <div className='flex flex-col mx-auto  w-full md:max-w-xs lg:max-w-sm xl:max-w-md'>

                        {/** logo login */}
                        <div className='absolute top-0 md:top-0.5 lg:top-1.5 xl:top-2.5 h-full'>
                            <GiHospitalCross size={30} className='text-sky-400   scale-75 md:scale-90 lg:scale-100 xl:scale-125 ' />
                        </div>



                        <form onSubmit={fetchAdmin} className='flex flex-col gap-2 md:gap-4 lg:gap-6  w-full'>
                            <p className='font-bold text-sky-400 border-b-2 w-12 xl:w-20 lg:w-16 tracking-wider text-start pb-2 border-b-sky-300 text-md lg:text-xl xl:text-2xl '>Login</p>

                            {/** username input */}
                            <div className='relative '>
                                <input type='text' onChange={(e) => setUsername(e.target.value)} placeholder='username'
                                    className='border-sky-500 w-full placeholder-slate-200 placeholder:text-sm md:placeholder:text-md lg:placeholder:text-lg  pl-12  py-0.5 md:py-1 lg:py-1.5 px-1 
                                     rounded-xl focus:ring-0 focus:border-sky-500 border focus:outline-none shadow-sm shadow-sky-100 ' />
                                <TiUser size={25} className={`absolute top-0.5 md:top-1 lg:top-2 ml-2  text-sky-400 border-sky-300`} />
                            </div>

                            {/** password input */}
                            <div className='relative '>
                                <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password'
                                    className='border-sky-500 w-full placeholder-slate-200 pl-12 placeholder:text-sm md:placeholder:text-md lg:placeholder:text-lg py-0.5 md:py-1 lg:py-1.5 px-1 bg-white
                                 rounded-xl focus:ring-0 border focus:border-sky-500 focus:outline-none shadow-sm shadow-sky-100' />
                                <TiLockClosed size={23} className=' absolute top-0.5 md:top-1 lg:top-2 ml-2 pointer-events-none text-sky-400' />
                            </div>

                            {/** button login */}
                            <button type='submit' className={`border py-0.5 md:py-1 lg:py-1.5 shadow-md rounded-xl text-white text-md md:text-lg xl:text-xl tracking-wider text-center bg-sky-400 hover:bg-sky-300 transition duration-300 border-sky-300  `} > Login</button>
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
                <div className='absolute top-[40%] left-[50%] bg-white/60 p-1 rounded  border-l border-l-gray-100 '>
                    <h1 className='text-xl tracking-wider'>Loding...</h1>
                </div>
            }

        </div >
    )
}

export default Login
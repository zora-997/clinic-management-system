import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import GlobalContext from '../contexts/createContext/context';

const ReportInput = ({ setSearchShow }) => {

    const { fetchReport } = useContext(GlobalContext)

    const location = useLocation();

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const inputHandler = (e) => {
        e.preventDefault();

        console.log(from, " ", to);
        fetchReport({ from, to })
        setSearchShow(true)

    }



    return (
        <div className='flex justify-end mt-8   w-full '>

            <form onSubmit={inputHandler} className='flex justify-between items-center mr-20   w-3/4'>
                {/** from input */}
                <div className='flex items-center w-[40%]'>
                    <label className='text-gray-600 mr-2 text-lg'>from</label>
                    <input
                        type="date"
                        name='from'
                        required
                        onChange={(e) => setFrom(e.target.value)}
                        value={from}
                        className={`bg-white focus:ring-1 focus:outline-none border pl-2 p-1 w-full  rounded shadow-sm shadow-black/10`} />
                </div>

                {/** to input */}
                <div className='flex items-center w-[40%] '>
                    <label className='text-gray-600 mr-2 text-lg '>to</label>
                    <input
                        type="date"
                        name='to'
                        required
                        onChange={(e) => setTo(e.target.value)}
                        value={to}
                        className={`bg-white focus:ring-1 focus:outline-none border pl-2 p-1 w-full  rounded shadow-sm shadow-black/10`} />
                </div>

                {/** button search */}
                <button
                    type='submit'
                    className={`
                     hover:text-white shadow-sm flex items-center shadow-gray-300 border
                      text-sky-400 border-sky-300 h-fit p-1 px-8 rounded-md hover:bg-sky-300`}
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default ReportInput
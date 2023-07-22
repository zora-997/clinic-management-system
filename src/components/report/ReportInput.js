import React, { useContext } from 'react'
import GlobalContext from '../contexts/createContext/context';

const ReportInput = ({ setSearchShow, from, to, setFrom, setTo }) => {

    const { fetchReport } = useContext(GlobalContext)


    const inputHandler = (e) => {
        e.preventDefault();

        fetchReport({ from, to })
        setSearchShow(true)

    }



    return (
        <div className=' mt-8 '>
            <div className='bg-white rounded-md p-5 '>
                <form onSubmit={inputHandler} className='grid sm:grid-cols-5  gap-y-3 sm:gap-y-0 sm:gap-x-3'>
                    {/** from input */}
                    <div className='sm:flex items-center w-full sm:col-span-2'>
                        <label className='text-gray-600 mr-3  text-lg'>from</label>
                        <input
                            type="date"
                            name='from'
                            required
                            onChange={(e) => setFrom(e.target.value)}
                            value={from}
                            className={`bg-white ${from && 'bg-blue-300/30'} focus:ring-2 focus:outline-none border pl-2 p-1 w-full  rounded shadow-sm shadow-black/10`} />
                    </div>

                    {/** to input */}
                    <div className='sm:flex items-center w-full sm:col-span-2'>
                        <label className='text-gray-600 mr-2 text-lg '>to</label>
                        <input
                            type="date"
                            name='to'
                            required
                            onChange={(e) => setTo(e.target.value)}
                            value={to}
                            className={`bg-white ${to && 'bg-blue-300/30'} focus:ring-2 focus:outline-none border pl-2 p-1 w-full  rounded shadow-sm shadow-black/10`} />
                    </div>

                    {/** button search */}
                    <div className=''>
                        <button
                            type='submit'
                            className={`
                     hover:text-white shadow-sm  shadow-gray-300 border tracking-wider mt-1
                      text-sky-400 border-sky-300  p-1.5 w-full text-center rounded-md hover:bg-sky-300`}
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReportInput
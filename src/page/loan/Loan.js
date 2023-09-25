import React, { useState } from 'react'


const Loan = () => {

    const [loan, setLoan] = useState(0)
    const [date, setDate] = useState("");

    return (
        <div className='Loan'>
            <div className='grid gap-5 mx-3 mt-10'>
                {/* loan input */}
                <form className='grid md:grid-cols-3 gap-5 w-full bg-white p-5 rounded-md'>
                    <div>
                        <label className='text-black  2xl:text-xl'>Loan</label>
                        <input
                            type="number"
                            required
                            onChange={(e) => setLoan(e.target.value)}
                            // value={from}
                            placeholder='0.00'
                            className={`bg-white placeholder-gray-400 focus:ring-1 focus:outline-none  border pl-2 p-1.5 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`} />
                    </div>
                    <div>
                        <label className='text-black 2xl:text-xl'>Date</label>
                        <input
                            type="date"
                            required
                            onChange={(e) => setDate(e.target.value)}
                            // value={from}
                            className={`bg-white ${date ? 'text-gray-600' : 'text-gray-400'}  focus:ring-1 focus:outline-none  border pl-2 p-1.5 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`} />
                    </div>
                    <div className='place-self-end w-full'>
                        <button type='submit' className='border tracking-wider  rounded-md bg-cyan-500 hover:bg-cyan-400 text-white w-full p-2 2xl:p-3 2xl:text-xl '>Create Loan</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Loan
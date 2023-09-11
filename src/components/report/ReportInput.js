import React, { useContext } from 'react'
import GlobalContext from '../contexts/createContext/context';

const ReportInput = ({ from, to, setFrom, setTo, erorFrom, erorTo, setWorkingType_id, setDoctor_id, doctor_id, erordoctorid, setExpenseType_id }) => {


    const { doctorList, expenseTypeList, surgeryType } = useContext(GlobalContext)


    return (
        <div className=' mt-8 '>
            <div className='bg-white rounded-md p-5  '>
                <form className='flex gap-4'>

                    {/* ExpenseType input */}
                    <div className=' w-2/5 '>
                        <label className='text-gray-600 text-base 2xl:text-lg ' >Doctor</label>
                        <select required onChange={(e) => { setDoctor_id(e.target.value) }}
                            className={`${!doctor_id && !erordoctorid ? 'bg-white' : !doctor_id && ' border-red-300 border-2 bg-red-200'}focus:ring-2 mt-1 focus:outline-none border pl-2 p-1 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`}>
                            <option value={0}>Select Doctor</option>
                            {doctorList.map((doctor) => {
                                return <option key={doctor.doctor_id} value={`${doctor.doctor_id}`}>{doctor.doctor_name}</option>
                            })}
                        </select>
                    </div>

                    {/* ExpenseType input */}
                    <div className='w-2/5'>
                        <label className='text-gray-600 text-base 2xl:text-lg' >Expense Type</label>
                        <select required onChange={(val) => setExpenseType_id(val.target.value)}
                            className='focus:ring-2 mt-1 focus:outline-none border pl-2 p-1 2xl:p-3 w-full  rounded shadow-sm shadow-black/10 '>
                            <option value={0}>Select Expense Type</option>
                            {expenseTypeList && expenseTypeList.map((expenseType) => {
                                return <option key={expenseType.expense_type_id} value={`${expenseType.expense_type_id}`}>{expenseType.expense_type_name}</option>
                            })}
                        </select>
                    </div>

                    {/* Working type input */}
                    <div className='w-2/5'>
                        <label className='text-gray-600 text-base 2xl:text-lg' >Working Type</label>
                        <select required onChange={(val) => { setWorkingType_id(val.target.value) }}
                            className='focus:ring-2 mt-1 focus:outline-none border pl-2 p-1 2xl:p-3 w-full  rounded shadow-sm shadow-black/10 '>
                            <option value={0}>Select Working Type</option>
                            {surgeryType && surgeryType.map((surgeryType) => {
                                return <option key={surgeryType.surgery_type_id} value={`${surgeryType.surgery_type_id}`}>{surgeryType.surgery_type_name}</option>
                            })}
                        </select>
                    </div>

                    {/** from input */}
                    <div className='w-2/5'>
                        <label className='text-gray-600  text-base 2xl:text-lg'>From</label>
                        <input
                            type="date"
                            name='from'
                            required
                            onChange={(e) => setFrom(e.target.value)}
                            value={from}
                            className={`bg-white ${!from && !erorFrom ? 'bg-white' : !from && ' border-red-300 border-2'}  mt-1 focus:outline-none border pl-2 p-1 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`} />
                    </div>

                    {/** to input */}
                    <div className=' w-2/5 '>
                        <label className='text-gray-600 mr-2 text-base 2xl:text-lg'>To</label>
                        <input
                            type="date"
                            name='to'
                            required
                            onChange={(e) => setTo(e.target.value)}
                            value={to}
                            className={`bg-white ${!to && !erorTo ? 'bg-white' : !to && ' border-red-300 border-2'}  mt-1 focus:outline-none border pl-2 p-1 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`} />
                    </div>

                    {/** button search */}
                    {/* <div className=''>
                        <button
                            type='submit'
                            className={`
                     hover:text-white shadow-sm  shadow-gray-300 border tracking-wider mt-1
                      text-sky-400 border-sky-300  p-1.5 w-full text-center rounded-md hover:bg-sky-300`}
                        >
                            Search
                        </button>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default ReportInput
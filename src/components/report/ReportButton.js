import React from 'react'

const ReportButton = ({ setExpenseShow, expenseShow }) => {
    return (
        <div className='flex justify-end mt-8'>
            <div className='w-3/4 mr-20 flex'>

                {/** button doctor */}
                <button
                    type='submit'
                    onClick={() => setExpenseShow(false)}
                    className={`
                     hover:text-white shadow-sm flex items-center shadow-gray-300 border mr-3 ${!expenseShow && 'bg-sky-300 text-white'}
                      text-sky-400 border-sky-300 h-fit p-1 px-9 rounded-md hover:bg-sky-300`}>
                    Doctor
                </button>

                {/** button expense */}
                <button
                    type='submit'
                    onClick={() => setExpenseShow(true)}
                    className={`
                     hover:text-white shadow-sm flex items-center shadow-gray-300 border ${expenseShow && 'bg-sky-300 text-white'}
                      text-sky-400 border-sky-300 h-fit p-1 px-8 rounded-md hover:bg-sky-300`}>
                    Expense
                </button>
            </div>
        </div>
    )
}

export default ReportButton
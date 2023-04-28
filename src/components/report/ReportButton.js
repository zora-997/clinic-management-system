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
                     hover:text-white text-cyan-400 shadow-sm flex items-center shadow-gray-300 border mr-3 ${!expenseShow && 'bg-cyan-500 text-white/100'}
                       border-cyan-300 h-fit p-1 px-9 rounded-md hover:bg-cyan-500`}>
                    Doctor
                </button>

                {/** button expense */}
                <button
                    type='submit'
                    onClick={() => setExpenseShow(true)}
                    className={`
                     hover:text-white text-cyan-400 shadow-sm flex items-center shadow-gray-300 border mr-3 ${expenseShow && 'bg-cyan-500 text-white/100'}
                       border-cyan-300 h-fit p-1 px-9 rounded-md hover:bg-cyan-500`}>
                    Expense
                </button>
            </div>
        </div>
    )
}

export default ReportButton
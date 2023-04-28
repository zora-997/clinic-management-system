import React, { useContext } from 'react'
import GlobalContext from '../contexts/createContext/context';

const ReportExpense = () => {
    const { mainReportList, expenseTypeList } = useContext(GlobalContext);
    //bo garanaway nawi expenseTypeList
    const eid = expenseTypeList.map(expense => expense.expense_type_id)
    const en = expenseTypeList.map(expense => expense.expense_type_name)
    const totalExpense = mainReportList.total_expense;
    console.log(totalExpense);
    return (
        <div className='flex justify-end mt-8'>
            <div className='w-3/4 mr-20 flex flex-col'>
                <table className="whitespace-nowrap bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 dark:bg-gray-700 dark:text-gray-400">
                        <tr className=''>

                            <th scope="col" className="px-6 py-3">Id</th>
                            <th scope="col" className="px-6 py-3">ExpenseType</th>
                            <th scope="col" className="px-6 py-3">Amount</th>
                            <th scope="col" className="px-6 py-3">Expense Note</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                            {/* <th scope="col" className="px-6 py-3">Total Expense</th> */}


                        </tr>
                    </thead>
                    <tbody>

                        {mainReportList.expense_type && mainReportList.expense_type.map((expense, index) => {

                            return (
                                <>

                                    {
                                        expense.expenses.length > 0 && expense.expenses.map((i, inde) => {
                                            return <tr key={inde}
                                                className="border  cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                                                <th scope='row' className="px-5 py-4">&nbsp;&nbsp;{inde + 1}</th>
                                                <td className="px-6 py-4">{en[eid.indexOf(`${i.expense_type_id}`)]}</td>
                                                <td className="px-6 py-4">{i.expense_amount}</td>
                                                <td className="px-6 py-4">{i.expense_note}</td>
                                                <td className="px-6 py-4">{i.expense_date}</td>

                                                {/* {expense.expenses.length > 0 && <td rowSpan={expense.expenses.length} className="px-6 py-4 "> {expense.total_expense}</td>} */}

                                            </tr>

                                        })

                                    }
                                    {expense.expenses.length > 0 && <div className='py-3 pl-1 '><span className='bg-green-100/50 text-green-500 p-1 rounded'> Total : {expense.total_expense}</span></div>}
                                </>
                            )


                        })

                        }
                    </tbody>


                </table>
                <div className='w-full flex justify-center bg-green-100/50 my-3'>
                    <span className='py-3 text-green-500'>Total Expense : {totalExpense}</span>
                </div>
            </div>
        </div>
    )
}

export default ReportExpense
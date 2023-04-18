import React, { useContext, useState } from 'react'
import GlobalContext from '../../contexts/createContext/context';




const AddExpenseModal = ({ isAddVisible, onClose }) => {

    const { addExpense, expenseTypeList } = useContext(GlobalContext)


    const [expense_type_id, set_new_expense_type_id] = useState();
    const [expense_amount, set_new_expense_amount] = useState();
    const [expense_note, set_new_expense_note] = useState("");
    const [expense_date, set_new_expense_date] = useState("");


    // update exponse type.
    const createExpenseHandler = (e) => {
        e.preventDefault();
        addExpense({ expense_type_id, expense_amount, admin_id: 1, expense_date, expense_note });
        set_new_expense_type_id()
        set_new_expense_amount()
        set_new_expense_note("")
        set_new_expense_date("")
    }


    if (!isAddVisible) return null;
    return (
        <div className=' fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[550px] flex flex-col'>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
                <form onSubmit={(e) => { createExpenseHandler(e); onClose(false); }} className=' bg-white rounded-md  grid p-5'>
                    <div className=' bg-white rounded-md p-5 grid '>
                        <div className='flex'>
                            <div className='w-3/4 mr-5'>
                                <label className='text-gray-500' >ExpenseType</label>
                                <select required onChange={(val) => set_new_expense_type_id(val.target.value)} className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 '>
                                    <option></option>
                                    {expenseTypeList && expenseTypeList.map((expenseType) => {
                                        return <option key={expenseType.expense_type_id} value={`${expenseType.expense_type_id}`}>{expenseType.expense_type_name}</option>
                                    })}
                                </select>
                            </div>
                            <div className='w-1/3'>
                                <label className='text-gray-500'>Amount</label>
                                <input type="number" autoComplete="off"
                                    onChange={(val) => set_new_expense_amount(val.target.value)} value={expense_amount} placeholder='0.00' required
                                    className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2' />
                            </div>
                        </div>

                        <label className='text-gray-500'>Date</label>
                        <input type="date" autoComplete="off"
                            onChange={(val) => set_new_expense_date(val.target.value)} value={expense_date} placeholder='date' required
                            className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2' />

                        <label className='text-gray-500'>Note</label>
                        <input type="text" autoComplete="off"
                            onChange={(val) => set_new_expense_note(val.target.value)} value={expense_note} placeholder='note'
                            className='focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2' />

                        <button type='submit'
                            className='border rounded-md bg-cyan-500 hover:bg-cyan-400 text-white p-2 my-2'>
                            create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddExpenseModal
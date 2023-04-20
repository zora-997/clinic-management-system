import React, { useContext } from 'react'
import GlobalContext from '../../contexts/createContext/context';

const ExpenseModal = ({ isVisible, onClose, expense_type_name, expense_id, expense_type_id, set_new_expense_type_id, expense_amount, set_new_expense_amount, admin_id, set_new_admin_id, expense_note, set_new_expense_note }) => {
    const { updateExpense, deleteExpense, expenseTypeList } = useContext(GlobalContext)

    console.log(expense_type_name);
    // update exponse type.
    const updateExpenseHandler = (e) => {
        e.preventDefault();
        updateExpense({ expense_id, expense_type_id, expense_amount, admin_id, expense_note });
    }

    if (!isVisible) return null;
    return (
        <div className=' fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[550px] flex flex-col'>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
                <div className=' bg-white rounded-md p-5 grid '>
                    <div className='flex'>
                        <div className='w-3/4 mr-5'>
                            <label className='text-gray-500' >ExpenseType</label>
                            <select required onChange={(val) => set_new_expense_type_id(val.target.value)} className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 '>
                                <option>{expense_type_name}</option>
                                {expenseTypeList && expenseTypeList.map((expenseType) => {
                                    return <option key={expenseType.expense_type_id} value={`${expenseType.expense_type_id}`}>{expenseType.expense_type_name}</option>
                                })}
                            </select>
                        </div>
                        <div className='w-1/3'>
                            <label className='text-gray-500'>Amount</label>
                            <input type="number" autoComplete="off"
                                onChange={(val) => set_new_expense_amount(val.target.value)} value={expense_amount} placeholder='new amount'
                                className='w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2' />
                        </div>
                    </div>

                    <label className='text-gray-500'>Note</label>
                    <input type="text" autoComplete="off"
                        onChange={(val) => set_new_expense_note(val.target.value)} value={expense_note} placeholder='new note'
                        className='focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2' />







                    <div className='flex justify-between'>
                        <button
                            onClick={(e) => { updateExpenseHandler(e); onClose(false); }}
                            className='border rounded-md bg-cyan-500 hover:bg-cyan-400 text-white px-8 p-1.5 my-2'>
                            Update
                        </button>
                        <button
                            onClick={() => { deleteExpense(expense_id); onClose(false); }}
                            className='border rounded-md bg-red-600 hover:bg-red-500 text-white   px-8 p-1.5 my-2'>
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ExpenseModal
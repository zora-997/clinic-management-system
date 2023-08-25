import React, { useContext, useState } from 'react'
import GlobalContext from '../../contexts/createContext/context'


const ExponseTypeModal = ({ isAddVisible, onClose }) => {
    const { addExpenseType } = useContext(GlobalContext)

    const [expense_type_name, set_expense_type_name] = useState("");
    let expense_type_date = (new Date().toISOString().slice(0, 10));
    // update exponse type.
    const createExpenseTypeHandler = (e) => {
        e.preventDefault();
        addExpenseType({ expense_type_name, expense_type_date });
        set_expense_type_name("");
    }

    if (!isAddVisible) return null;
    return (
        <div className=' fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[400px] flex flex-col'>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
                <form onSubmit={(e) => { createExpenseTypeHandler(e); onClose(false); }} className=' bg-white rounded-md  grid '>
                    <div className=' bg-white rounded-md p-3 grid '>
                        <label className='text-gray-500'>Name</label>
                        <input type="text" autoComplete="off"
                            onChange={(val) => set_expense_type_name(val.target.value)}
                            value={expense_type_name}
                            placeholder='Expense type'
                            required
                            className='focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2' />

                        <button type='submit'
                            className='border rounded-md bg-cyan-500 hover:bg-cyan-400 text-white p-2 my-2'>
                            Create Expense Type
                        </button>



                    </div>
                </form>
            </div>
        </div>
    )
}

export default ExponseTypeModal
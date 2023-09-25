import React, { useContext } from 'react'
import GlobalContext from '../../contexts/createContext/context'
import ButtonUpdate from '../ui/button/ButtonUpdate'
import ButtonDelete from '../ui/button/ButtonDelete'


const ExponseTypeModal = ({ isVisible, onClose, expense_type_name, setNewName, expense_type_id }) => {
    const { updateExpenseType, deleteExpenseType } = useContext(GlobalContext)

    // update exponse type.
    const updateExpenseTypeHandler = (e) => {
        e.preventDefault();
        updateExpenseType({ expense_type_name, expense_type_id });
    }

    // delete expensetype
    const deletee = (e) => {
        e.preventDefault();
        deleteExpenseType(expense_type_id)
    }

    if (!isVisible) return null;
    return (
        <div className=' fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[400px] flex flex-col'>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose(false)}> X </button>
                <div className=' bg-white rounded-md p-3 grid '>
                    <label className='text-gray-500'>Name</label>
                    <input type="text" autoComplete="off"
                        onChange={(val) => setNewName(val.target.value)} value={expense_type_name} placeholder='new expense type'
                        className='focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2' />

                    <div className='flex justify-between'>
                        <ButtonUpdate update={updateExpenseTypeHandler} onClose={onClose} />
                        <ButtonDelete deleteRow={deletee} onClose={onClose} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ExponseTypeModal
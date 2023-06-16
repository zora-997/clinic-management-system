import React, { useContext, useState } from 'react'
import GlobalContext from "../contexts/createContext/context";
import ExpenseModal from '../layout/modal/ExpenseModal';
import AddExpenseModal from '../layout/modal/AddExpenseModal';


const Expense = () => {

    const { expenseList, searchExpense, expenseTypeList } = useContext(GlobalContext);

    //bo garanaway nawi expenseTypeList
    const eid = expenseTypeList.map(expense => expense.expense_type_id)
    const en = expenseTypeList.map(expense => expense.expense_type_name)

    const [expense_type_name, set_expense_type_name] = useState("");
    const [expense_id, set_expense_id] = useState(0);
    const [expense_type_id, set_new_expense_type_id] = useState(0);
    const [expense_amount, set_new_expense_amount] = useState(0);
    const [admin_id, set_new_admin_id] = useState(0);
    const [expense_note, set_new_expense_note] = useState("");

    const [show, setShow] = useState(false);
    const [addshow, setAddShow] = useState(false);
    return (

        <div className=" flex flex-col  items-end  w-full select-none">
            <ExpenseModal isVisible={show} onClose={setShow} expense_type_name={expense_type_name} set_expense_type_name={set_expense_type_name} expense_id={expense_id} expense_type_id={expense_type_id} set_new_expense_type_id={set_new_expense_type_id} expense_amount={expense_amount} set_new_expense_amount={set_new_expense_amount} admin_id={admin_id} set_new_admin_id={set_new_admin_id} expense_note={expense_note} set_new_expense_note={set_new_expense_note} />
            <AddExpenseModal isAddVisible={addshow} onClose={setAddShow} />
            <div className='mr-16 mt-10 bg-white rounded-md p-5'>
                <div className='place-self-start'>
                    <button onClick={() => setAddShow(true)}
                        className={`
                     text-white shadow-sm flex items-center shadow-gray-300 border mb-2 
                      hover:text-cyan-400 border-cyan-300 h-fit p-1 px-9 rounded-md bg-cyan-500 hover:bg-transparent duration-200`}>Create Expense</button>
                </div>
                <table className="whitespace-nowrap bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 w-[1000px]">
                    <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">Id</th>
                            <th scope="col" className="px-6 py-3">ExpenseType</th>
                            <th scope="col" className="px-6 py-3">Amount</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                            <th scope="col" className="px-6 py-3">Not</th>
                        </tr>
                    </thead>
                    <tbody>


                        {searchExpense(expenseList).map((expense, index) => {
                            return <tr key={index}
                                onClick={() => {
                                    setShow(true);
                                    set_expense_type_name(en[eid.indexOf(`${expense.expense_type_id}`)]);
                                    set_new_expense_type_id(expense.expense_type_id);
                                    set_expense_id(expense.expense_id);
                                    set_new_expense_amount(expense.expense_amount);
                                    set_new_admin_id(expense.admin_id);
                                    set_new_expense_note(expense.expense_note)
                                }}
                                className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                                <th scope='row' className="px-5 py-4">&nbsp;&nbsp;{index + 1}</th>
                                <td className="px-6 py-4">{en[eid.indexOf(`${expense.expense_type_id}`)]}</td>
                                <td className="px-6 py-4">{expense.expense_amount}</td>
                                <td className="px-6 py-4">{expense.expense_date}</td>
                                <td className="px-6 py-4">{expense.expense_note}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

        </div>



    )
}

export default Expense;



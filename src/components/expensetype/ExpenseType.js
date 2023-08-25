import React, { useContext, useState } from 'react'
import GlobalContext from "../contexts/createContext/context";
import ExponseTypeModal from '../layout/modal/ExponseTypeModal';
import AddExponseTypeModal from '../layout/modal/AddExponseTypeModal';


const ExpenseType = () => {

    const { expenseTypeList, searchExpenseType } = useContext(GlobalContext);

    const [newExpense_id, set_Expense_id] = useState(0);
    const [newName, setNewName] = useState("");

    const [show, setShow] = useState(false);
    const [addshow, setAddShow] = useState(false);
    return (

        <div className="select-none">

            <ExponseTypeModal isVisible={show} onClose={setShow} expense_type_name={newName} setNewName={setNewName} expense_type_id={newExpense_id} />
            <AddExponseTypeModal isAddVisible={addshow} onClose={setAddShow} />
            <div className='overflow-auto mx-3 mt-10 bg-white rounded-md p-5 '>
                <div className='place-self-start'>
                    <button onClick={() => setAddShow(true)}
                        className={`
                     text-white shadow-sm flex items-center shadow-gray-300 border mb-2 
                      hover:text-cyan-400 border-cyan-300 h-fit p-1 px-9 rounded-md bg-cyan-500 hover:bg-transparent duration-200`}>Create Expense Type</button>
                </div>
                <table className="whitespace-nowrap bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 w-full">
                    <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500  ">
                        <tr>
                            <th scope="col" className="px-6 py-3">Id</th>
                            <th scope="col" className="px-6 py-3">Expense Type</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                        </tr>
                    </thead>
                    <tbody>


                        {searchExpenseType(expenseTypeList).map((expense, index) => {
                            return <tr key={index} onClick={() => { setShow(true); setNewName(expense.expense_type_name); set_Expense_id(expense.expense_type_id) }}
                                className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                                <th scope='row' className="px-5 py-4">&nbsp;&nbsp;{index + 1}</th>
                                <td className="px-6 py-4">{expense.expense_type_name}</td>
                                <td className="px-6 py-4">{expense.expense_type_date}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>





    )
}

export default ExpenseType;










// am shewaia  ba be bakar henany useContext and useReducer


  //const [doctorList, setdoctorList] = useState([]);
  // setdoctorList(newDoctorsList);
    // useEffect(() => {
    //     // load all doctors.
    //     const fetchDoctors = async () => {
    //         const response = await api.get('/doctor');
    //         setdoctorList(response.data);

    //     }
    //     fetchDoctors();
    // }, [])






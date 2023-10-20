import React, { useContext, useState } from 'react'
import ButtonAdd from '../../components/ui/button/ButtonAdd';
import { useLocation } from 'react-router-dom';
import GlobalContext from '../../contexts/createContext/context';


const Loan = () => {

    const { addLoan } = useContext(GlobalContext)

    // bo war grtnaway admin_id
    const getIdAdmin = localStorage.getItem("data")
    let admin_id = (JSON.parse(getIdAdmin).token);

    // bo war grtnaway sick_id
    const location = useLocation();
    let sick_id = location.state;

    const [loan_to_cash_amount, setLoan] = useState(0)
    const [loan_to_cash_date, setDate] = useState("");
    const [loan_to_cash_note, setNote] = useState("");


    const loanHandler = (e) => {
        e.preventDefault();

        addLoan({ loan_to_cash_amount, sick_id, admin_id, loan_to_cash_date, loan_to_cash_note })

        setLoan(0);
        setDate("");
        setNote("");

    }

    return (
        <div className='Loan'>
            <div className='grid gap-5 mx-3 mt-10'>
                {/* loan input */}
                <form onSubmit={(e) => loanHandler(e)} className='grid md:grid-cols-4 gap-5 w-full bg-white p-5 rounded-md'>
                    <div>
                        <label className='text-black  2xl:text-xl'>Loan Amount</label>
                        <input
                            type="number"
                            required
                            onChange={(e) => setLoan(e.target.value)}
                            // value={from}
                            placeholder='0.00'
                            className={`bg-white placeholder-gray-400 focus:ring-1 focus:outline-none  border pl-2 p-1.5 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`} />
                    </div>
                    <div>
                        <label className='text-black 2xl:text-xl'>Loan Date</label>
                        <input
                            type="date"
                            required
                            onChange={(e) => setDate(e.target.value)}
                            // value={from}
                            className={`bg-white ${loan_to_cash_date ? 'text-gray-600' : 'text-gray-400'}  focus:ring-1 focus:outline-none  border pl-2 p-1.5 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`} />
                    </div>
                    <div>
                        <label className='text-black 2xl:text-xl'>Loan Note</label>
                        <input
                            type="text"
                            placeholder='Note'
                            onChange={(e) => setNote(e.target.value)}
                            // value={from}
                            className={`bg-white ${loan_to_cash_note ? 'text-gray-600' : 'text-gray-400'}  focus:ring-1 focus:outline-none  border pl-2 p-1.5 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`} />
                    </div>
                    <div className='place-self-end w-full'>
                        <ButtonAdd add="Add Loan" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Loan
import React, { useState } from 'react'
import ReportInput from './ReportInput'
import ReportButton from './ReportButton'
import ReportDoctor from './ReportDoctor'
import ReportExpense from './ReportExpense'
import ReportMain from './ReportMain'

const Report = () => {
    const [searchShow, setSearchShow] = useState(false);
    const [expenseShow, setExpenseShow] = useState(false);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    return (
        <div className='flxe flex-col'>
            <ReportInput setSearchShow={setSearchShow} from={from} setFrom={setFrom} to={to} setTo={setTo} />
            {/* {searchShow &&
                <div>
                    <ReportButton setExpenseShow={setExpenseShow} expenseShow={expenseShow} />
                    {!expenseShow ? <ReportDoctor /> : <ReportExpense />}
                </div>
            } */}

            {searchShow && <ReportMain />}

        </div>
    )
}

export default Report
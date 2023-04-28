import React, { useState } from 'react'
import ReportInput from './ReportInput'
import ReportButton from './ReportButton'
import ReportDoctor from './ReportDoctor'
import ReportExpense from './ReportExpense'

const Report = () => {
    const [searchShow, setSearchShow] = useState(false);
    const [expenseShow, setExpenseShow] = useState(false);

    return (
        <div className='flxe flex-col'>
            <ReportInput setSearchShow={setSearchShow} />
            {searchShow &&
                <div>
                    <ReportButton setExpenseShow={setExpenseShow} expenseShow={expenseShow} />
                    {!expenseShow ? <ReportDoctor /> : <ReportExpense />}
                </div>
            }

        </div>
    )
}

export default Report
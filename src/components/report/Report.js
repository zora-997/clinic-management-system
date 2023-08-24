import React, { useState } from 'react'
import ReportInput from './ReportInput'
import ReportMain from './ReportMain'

const Report = () => {
    const [searchShow, setSearchShow] = useState(false);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [doctor_id, setDoctor_id] = useState(0);
    const [expense_type_id, setExpenseType_id] = useState(0);
    const [working_type_id, setWorkingType_id] = useState(0);

    return (
        <div className='flxe flex-col px-3'>
            <ReportInput setSearchShow={setSearchShow} from={from} setFrom={setFrom} to={to}
                setTo={setTo} doctor_id={doctor_id} setDoctor_id={setDoctor_id} expense_type_id={expense_type_id}
                setExpenseType_id={setExpenseType_id} setWorkingType_id={setWorkingType_id} />

            <ReportMain from={from} to={to} doctor_id={doctor_id} expense_type_id={expense_type_id}
                working_type_id={working_type_id} />


        </div>
    )
}

export default Report
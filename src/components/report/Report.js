import React, { useState } from 'react'
import ReportInput from './ReportInput'
import ReportMain from './ReportMain'

const Report = () => {
    const [searchShow, setSearchShow] = useState(false);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    return (
        <div className='flxe flex-col'>
            <ReportInput setSearchShow={setSearchShow} from={from} setFrom={setFrom} to={to} setTo={setTo} />
            {searchShow && <ReportMain />}
        </div>
    )
}

export default Report
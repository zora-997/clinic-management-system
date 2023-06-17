import React from 'react'
import { Outlet } from 'react-router-dom'




// am componenta bo kate abe ka la naw dash bord new tab habe
const AllExpenseType = () => {
    return (
        <div className='AllExpenseType   '>
            <Outlet />
        </div>
    )
}

export default AllExpenseType
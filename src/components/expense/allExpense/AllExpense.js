import React from 'react'
import { Outlet } from 'react-router-dom'



// am componenta bo kate abe ka la naw dash bord new tab habe
const AllExpense = () => {
    return (
        <div className='AllExpense   '>
            <Outlet />

        </div>
    )
}

export default AllExpense
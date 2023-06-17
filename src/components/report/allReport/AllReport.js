import React from 'react'
import { Outlet } from 'react-router-dom'




// am componenta bo kate abe ka la naw dash bord new tab habe
const AllReport = () => {
    return (
        <div className='AllReport'>
            <Outlet />

        </div>
    )
}

export default AllReport
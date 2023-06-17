import React from 'react'
import { Outlet } from 'react-router-dom'




// am componenta bo kate abe ka la naw dash bord new tab habe
const AllDoctor = () => {
    return (
        <div className='All-Doctor   '>
            <Outlet />
        </div>
    )
}

export default AllDoctor
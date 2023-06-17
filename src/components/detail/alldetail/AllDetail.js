import React from 'react'
import { Outlet } from 'react-router-dom'




const AllDetail = () => {
    return (
        <div className='AllDetail flex'>
            <Outlet />
        </div>
    )
}

export default AllDetail
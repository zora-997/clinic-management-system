import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../../page/home/sidebar/SideBar'



const AllDetail = () => {
    return (
        <div className='AllDetail flex'>
            <SideBar />
            <Outlet />
        </div>
    )
}

export default AllDetail
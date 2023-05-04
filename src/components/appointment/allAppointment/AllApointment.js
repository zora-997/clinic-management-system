import React from 'react'
import SideBar from '../../../page/home/sidebar/SideBar'
import Header from '../../layout/header/Header'
import { Outlet } from 'react-router-dom'


const AllApointment = () => {
    return (
        <div className='All-Doctor   '>
            <SideBar />
            <Header />
            <Outlet />
        </div>
    )
}

export default AllApointment
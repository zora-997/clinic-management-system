import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../../page/home/sidebar/SideBar'
import Header from '../../layout/header/Header'


const AllSurgeryType = () => {
    return (
        <div className='all surgery '>
            <SideBar />
            <Header />
            <Outlet />

        </div>
    )
}

export default AllSurgeryType
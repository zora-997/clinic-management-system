import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../../page/home/sidebar/SideBar'
import Header from '../../layout/header/Header'


const AllSick = () => {

    return (
        <div className='all sick   '>
            <SideBar />
            <Header />
            <Outlet />
        </div>
    )
}

export default AllSick
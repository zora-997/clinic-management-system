import React from 'react'
import SideBar from '../../../page/home/sidebar/SideBar'
import { Outlet } from 'react-router-dom'
import Header from '../../layout/header/Header'

const AllSickDetail = () => {
    return (
        <div className='all sickdetal   '>
            <SideBar />
            <Header />
            <Outlet />
        </div>
    )
}

export default AllSickDetail
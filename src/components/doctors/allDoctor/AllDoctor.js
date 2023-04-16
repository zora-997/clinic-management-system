import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../../page/home/sidebar/SideBar'
import Header from '../../layout/header/Header'



// am componenta bo kate abe ka la naw dash bord new tab habe
const AllDoctor = () => {
    return (
        <div className='All-Doctor   '>
            <SideBar />
            <Header />
            <Outlet />

        </div>
    )
}

export default AllDoctor
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../../page/home/sidebar/SideBar'
import Header from '../../layout/header/Header'



// am componenta bo kate abe ka la naw dash bord new tab habe
const AllExpenseType = () => {
    return (
        <div className='AllExpenseType   '>
            <SideBar />
            <Header />
            <Outlet />

        </div>
    )
}

export default AllExpenseType
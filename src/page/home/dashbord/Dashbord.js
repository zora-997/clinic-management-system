import React from 'react'
import { Outlet } from 'react-router-dom'
import Body from '../../../components/layout/body/Body'
import Header from '../../../components/layout/header/Header'
import SideBar from '../sidebar/SideBar'

const Dashbord = () => {
    return (

        <div className='dashbord  w-full'>
            <SideBar />
            <Header />
            <Body />
            <Outlet />
        </div>
    )
}

export default Dashbord
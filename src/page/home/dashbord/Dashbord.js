import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Body from '../../../components/layout/body/Body'
import Header from '../../../components/layout/header/Header'
import SideBar from '../sidebar/SideBar'

const Dashbord = () => {
    const storedUser = localStorage.getItem('data');
    const history = useNavigate();
    return (


        <div>
            {
                !storedUser ? history("/login") :

                    <div className='dashbord  w-full'>
                        <SideBar />
                        <Header />
                        <Body />
                        <Outlet />
                    </div>
            }
        </div>
    )
}

export default Dashbord
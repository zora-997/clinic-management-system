import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Body from '../../../components/layout/body/Body'



const Dashbord = () => {
    const storedUser = localStorage.getItem('data');
    const history = useNavigate();

    return (
        <div>
            {
                !storedUser ? history("/") :
                    <div className='dashbord  w-full'>
                        <Body />
                        <Outlet />
                    </div>
            }
        </div>
    )
}

export default Dashbord
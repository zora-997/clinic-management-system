import React from 'react'
import BottomSideBar from '../sidebar/bottomSidebat/BottomSideBar';
import TopSideBar from './topSideBar/TopSideBar';
//import doctor from "../../../img/image/twoDoctor.svg";

const SideBar = () => {
    return (


        <aside className={`hidden lg:flex w-60 h-screen flex-col  shadow-sm shadow-gray-100 bg-white font-body  `}>
            <TopSideBar />
            <BottomSideBar />
        </aside>


    )
}

export default SideBar
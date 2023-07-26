import React from 'react'
import BottomSideBar from '../sidebar/bottomSidebat/BottomSideBar';
import TopSideBar from './topSideBar/TopSideBar';
//import doctor from "../../../img/image/twoDoctor.svg";

const SideBar = ({ showSildBar, setShowSildBar }) => {
    return (
        <div>
            <aside
                className={`lg:flex hidden  w-60 h-screen flex-col 
                     shadow-sm shadow-gray-100 bg-white font-body
                    `}>
                <TopSideBar />
                <BottomSideBar />
            </aside>

            {/* ama bo bashi responsiva */}
            {showSildBar &&
                <aside className='flex absolute top-0 left-0 z-20 lg:hidden   w-60 h-screen flex-col  shadow-sm shadow-gray-100 bg-white font-body'>
                    <TopSideBar />
                    {/* setShowSildBar bo awa har kat clic lasar bottomsidbar bkay close aka  */}
                    <BottomSideBar setShowSildBar={setShowSildBar} />
                </aside>
            }
        </div>

    )
}

export default SideBar
import React from 'react'
import BottomSideBar from '../sidebar/bottomSidebat/BottomSideBar';
import TopSideBar from './topSideBar/TopSideBar';
//import doctor from "../../../img/image/twoDoctor.svg";

const SideBar = () => {
    return (
        <aside className={`fixed grid gap-y-24 z-20 shadow-sm shadow-black/10  font-body h-screen w-56`}>
            <div>
                <TopSideBar />
                <BottomSideBar />
            </div>
            {/* <div className='h-full'>
                <img src={doctor} alt='doctor card' className='ml-3 w-[200px]  h-full' />
            </div> */}
        </aside>


    )
}

export default SideBar
import React from 'react'
import SickDetailHeader from './SickDetailHeader'
import SickDetailBodyTop from './SickDetailBodyTop'


const SickDetail = () => {
    return (
        <div className="flex flex-col items-end  pb-5  w-full select-none font-body   ">

            {/** body  */}
            <div className=' font-body flex flex-col p-3 bg-white mr-5 w-[68rem]'>

                <SickDetailHeader />
                <SickDetailBodyTop />

            </div>


        </div>
    )
}

export default SickDetail
import React, { useContext, useState } from 'react'
import SickDetailHeader from './SickDetailHeader'
import SickDetailBodyTop from './SickDetailBodyTop'
import GlobalContext from '../contexts/createContext/context'
import SickDetailBodyBox from './SickDetailBodyBox'
import SickDetailInput from './SickDetailInput'


const SickDetail = () => {
    const [sickDetail, setSickDetail] = useState({})


    return (
        <div className="flex flex-col items-end  pb-5  w-full select-none font-body   ">

            {/** body  */}
            <div className=' font-body flex flex-col p-3 bg-white mr-5 w-[68rem]'>

                <SickDetailHeader />
                <SickDetailBodyTop sickDetail={sickDetail} setSickDetail={setSickDetail} />
                {sickDetail.doctor_id && <SickDetailInput sickDetail={sickDetail} setSickDetail={setSickDetail} />}

                <SickDetailBodyBox sickDetail={sickDetail} setSickDetail={setSickDetail} />




            </div>


        </div>
    )
}

export default SickDetail
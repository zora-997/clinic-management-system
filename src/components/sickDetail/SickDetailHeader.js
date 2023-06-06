import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import tooth from "../../img/image/teeth (2).png";

import GlobalContext from '../contexts/createContext/context';


const SickDetailHeader = () => {

    const { sickList, doctorList } = useContext(GlobalContext);
    const location = useLocation();

    const did = doctorList.map((d) => d.doctor_id)
    const dn = doctorList.map((d) => d.doctor_name)


    return (
        <div className='relative grid justify-center mt-3 border-b-2  pb-2 '>
            {/* <img src={toothback} className="absolute" alt='tooth img' /> */}

            <div className=' w-fit flex flex-col items-center'>
                {/** image  */}
                <img src={tooth} className="p-0.5 w-28" alt='tooth img' />
                {/** clinic name  */}
                {sickList.map(sick => {
                    return (
                        <div key={sick.sick_id} className=''>
                            {sick.sick_id === location.state &&
                                <div className=''>
                                    <i className='text-2xl  font-serif p-2 px-2  w-full rounded-full'>{dn[did.indexOf(`${sick.doctor_id}`)]}</i>
                                </div>
                            }
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default SickDetailHeader
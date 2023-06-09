import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import GlobalContext from '../contexts/createContext/context'
import api from "../../api/api";
import { log } from 'react-modal/lib/helpers/ariaAppHider';

const SickDetailBodyTop = ({ sickDetail, setSickDetail }) => {

    const { sickList, doctorr_id } = useContext(GlobalContext);

    let doctor_id = doctorr_id


    setTimeout(async (doctor_id) => {
        let res = await api.post('appointment/inrow.php', { doctor_id });
        setSickDetail(res.data.data)
    }, 1000, doctor_id)




    return (

        <div className='rounded-md shadow-sm p-5'>
            {sickList.map(sick => {
                return (
                    <div key={sick.sick_id}>
                        {
                            sick.sick_id === sickDetail.sick_id &&
                            <div className='grid grid-cols-3'>

                                <p className='font-bold text-xl  text-gray-500'>Name : <span className='text-xl font-normal text-cyan-500 '>{sick.sick_name}</span></p>
                                <p className='font-bold text-xl text-gray-500  place-self-start ml-10'>Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<span className='text-xl font-normal text-cyan-500'>{sick.sick_age}</span></p>
                                <p className='font-bold text-xl text-gray-500 pl-5 ml-10'>Gender : <span className='text-xl font-normal text-cyan-500'>{sick.sick_gender}</span> </p>
                                <p className='font-bold text-xl  text-gray-500 mt-3'>Date &nbsp;&nbsp;&nbsp;: <span className='text-xl font-normal text-cyan-500 '>{sick.sick_date}</span> </p>
                                <p className='font-bold text-xl  text-gray-500 ml-10 mt-3'>Phone &nbsp;: &nbsp;&nbsp;<span className='text-xl font-normal text-cyan-500'>{sick.sick_phone}</span> </p>


                            </div>


                        }
                    </div>
                )
            })}



        </div>



    )
}

export default SickDetailBodyTop
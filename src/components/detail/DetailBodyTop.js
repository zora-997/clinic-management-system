import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import GlobalContext from '../contexts/createContext/context'

const DetailBodyTop = () => {

    const { sickList } = useContext(GlobalContext);
    const { id } = useParams();

    return (

        <div className='rounded-md shadow-sm p-5 '>

            {sickList.map(sick => {
                return (
                    <div key={sick.sick_id}>
                        {
                            sick.sick_id === id &&
                            <div>
                                <div className='flex justify-between w-full pr-16 mb-3 '>
                                    <p className='font-bold text-xl text-gray-500'>Name&nbsp;:&nbsp;<span className='text-xl font-normal text-cyan-500 '>{sick.sick_name}</span></p>
                                    <p className='font-bold text-xl text-gray-500 pl-14'>Age&nbsp;:&nbsp;&nbsp; <span className='text-xl font-normal text-cyan-500'>{sick.sick_age}</span></p>
                                    <p className='font-bold text-xl text-gray-500 pl-5'>Gender&nbsp;:&nbsp;&nbsp; <span className='text-xl font-normal text-cyan-500'>{sick.sick_gender}</span> </p>
                                </div>
                                <div className='flex w-[68%]  justify-between '>
                                    <p className='font-bold text-xl text-gray-500'>Date&nbsp;:&nbsp;&nbsp; <span className='text-xl font-normal text-cyan-500 '>{sick.sick_date}</span> </p>
                                    <p className='font-bold text-xl text-gray-500'>Phone&nbsp;:&nbsp;&nbsp; <span className='text-xl font-normal text-cyan-500'>{sick.sick_phone}</span> </p>
                                </div>
                            </div>


                        }
                    </div>
                )
            })}
        </div>



    )
}

export default DetailBodyTop
import React, { useContext, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import GlobalContext from '../contexts/createContext/context'
import { useLocation } from 'react-router-dom';

const DetailViewImage = () => {
    const { sickList } = useContext(GlobalContext);
    const [show, setShow] = useState(false);
    const location = useLocation();
    return (
        <div>
            <div onClick={() => setShow(true)} className='flex items-center cursor-pointer'>

                <span className='text-blue-500 tracking-wider mr-1'>View image</span>
                <HiArrowNarrowRight className='text-blue-500' />

            </div>

            {
                show ? (
                    <div className='flex flex-col w-fit'>
                        {
                            sickList && sickList.map(sick => {
                                return (
                                    <div key={sick.sick_id}>
                                        {sick.sick_id === location.state ? (
                                            <div key={sick.sick_id}>
                                                {sick.sick_invoice && sick.sick_invoice.map((invoice, index) => {

                                                    return (
                                                        <div key={sick.sick_id + index + 1}>
                                                            {invoice.image && invoice.image.map((img, index) => {

                                                                return (
                                                                    <div key={img.sick_surgery_invoice_image_id + index} >
                                                                        <img src={'https://freepaidaccount.com/clinic/api/uploads/' + img.sick_surgery_invoice_image_name} alt="view" />

                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                        ) : null}

                                    </div>
                                )
                            })
                        }


                        <span className='border mt-3' onClick={() => setShow(false)}>close</span>

                    </div>
                ) : null

            }


        </div>
    )
}

export default DetailViewImage
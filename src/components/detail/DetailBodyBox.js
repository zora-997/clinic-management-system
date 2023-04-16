import React, { useContext } from 'react'
import GlobalContext from '../contexts/createContext/context'
import { useParams } from 'react-router-dom';
import calendar from "../../img/image/calendar.png";
import money from "../../img/image/money.png";

const DetailBodyBox = () => {

    const { surgeryType, sickList } = useContext(GlobalContext);
    const { id } = useParams();
    const sid = surgeryType.map((d) => d.surgery_type_id)
    const sn = surgeryType.map((d) => d.surgery_type_name)



    return (
        <div>
            {/** sickSurgery && la gall  item.sick_visit &&  am dwana zor grngn bo away agar yakekian la katy map krdinish propertykay nabu nalle map reading undefined*/}
            {sickList && sickList.map(sick => {
                return (
                    <div key={sick.sick_id}>
                        {sick.sick_id && sick.sick_id === id && <p className='text-xl my-4 border-b-2 border-sky-300 w-fit'>History of Work </p>}
                    </div>
                )
            })}
            {sickList && sickList.map(sick => {
                return (
                    <div key={sick.sick_id} className=' '>
                        {sick.sick_id === id ? (
                            <div className='flex flex-col mb-4 pl-2 rounded-3xl   shadow-black/5 bg-white'>

                                {/* date div */}
                                {sick.sick_invoice && sick.sick_invoice.map((invoice, index) => {
                                    return (
                                        <div key={sick.sick_id + index + 1} className=' text-left flex  shadow-md mb-4 justify-between w-full border  border-r-2   text-gray-700 text-xl '>

                                            {/** div date u price */}
                                            <div className='flex flex-col justify-around border-r  relative  pl-2 w-[30%]'>
                                                <div className='flex items-center' >
                                                    <img src={calendar} alt='calendar' className='w-5 h-5 mr-3' />
                                                    <span className='text-lg font-normal '>{invoice.sick_surgery_date}</span>
                                                </div>
                                                {/** price div */}
                                                <div key={sick.sick_id + index + 2} className='flex  items-center'>

                                                    <img src={money} alt='money' className='w-5 h-5 mr-3' /><span className='text-lg font-normal '>
                                                        {invoice.sick_surgery_invoice && invoice.sick_surgery_invoice
                                                            .map(data => data.surgery_type_price)
                                                            .reduce((a, c) => parseInt(a) + parseInt(c))
                                                        }
                                                    </span>
                                                </div>

                                            </div>

                                            {/** div surgery type u description */}
                                            <div className='text-start pl-2 w-full'>
                                                {invoice.sick_surgery_invoice && invoice.sick_surgery_invoice.map((data, index) => {
                                                    return (
                                                        <div key={sick.sick_id + index + 3} className='flex flex-col  m-2 '>
                                                            <div
                                                                className=' -tracking-tight  '>
                                                                <strong className='text-gray-600'>Surgery Tpye :</strong> <span className='text-base'> {sn[sid.indexOf(`${data.surgery_type_id}`)]}</span>
                                                                <br />
                                                                <span className='text-gray-600'>Description : </span> <span className='text-base'>{data.sick_surgery_invoice_note}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        ) : null
                        }
                    </div>
                )
            })}





        </div>


    )
}

export default DetailBodyBox


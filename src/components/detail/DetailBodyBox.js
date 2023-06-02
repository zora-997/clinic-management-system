import React, { useContext, useRef, useState } from 'react'
import GlobalContext from '../contexts/createContext/context'
import { useLocation } from 'react-router-dom';
import calendar from "../../img/image/calendar.png";
import money from "../../img/image/money.png";
import ComponentToPrint from './ComponentToPrint ';
import { useReactToPrint } from 'react-to-print';
import DetailViewImage from './DetailViewImage';
import gallery from "../../img/image/image-gallery (1).png";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';





const DetailBodyBox = () => {

    const { surgeryType, sickList } = useContext(GlobalContext);

    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const [id, setId] = useState(0);

    const sid = surgeryType.map((d) => d.surgery_type_id)
    const sn = surgeryType.map((d) => d.surgery_type_name)

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    const slidLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
        console.log('left side');

    }

    const slidRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
        console.log('right side');

    }


    return (
        <div className=''>

            {/** sickSurgery && la gall  item.sick_visit &&  am dwana zor grngn bo away agar yakekian la katy map krdinish propertykay nabu nalle map reading undefined*/}
            {sickList && sickList.map(sick => {
                return (
                    <div key={sick.sick_id} >
                        {
                            sick.sick_id && sick.sick_id === location.state &&
                            <div className='flex justify-between my-4'>
                                {/** invisible bo away dyar nabe absolute bo awaia design tek nache  */}
                                <div className='absolute invisible bg-red-300'>
                                    <ComponentToPrint props={sickList} ref={componentRef} />
                                </div>
                                <p className='text-xl  border-b-2 border-sky-300 w-fit'>History of Work </p>
                                <button
                                    onClick={() => { handlePrint() }}
                                    className='hover:text-white shadow-sm shadow-gray-300 border text-sky-400 border-sky-300 h-fit p-1.5 px-7 tracking-wider rounded-md hover:bg-sky-300'>
                                    Print History
                                </button>
                            </div>
                        }

                    </div>
                )
            })}

            {sickList && sickList.map(sick => {
                return (
                    <div key={sick.sick_id} className=' '>
                        {sick.sick_id === location.state ? (
                            <div className='box flex flex-col rounded-3xl shadow-black/5 bg-white'>

                                {/* date div */}
                                {sick.sick_invoice && sick.sick_invoice.map((invoice, index) => {
                                    return (
                                        <div key={sick.sick_id + index + 1} className=' text-left flex  shadow-sm shadow-black/20 rounded-md mb-4 justify-between w-full  border-r-2   text-gray-700 text-xl '>

                                            {/** div date u price */}
                                            <div className='flex flex-col justify-around border-r  relative  pl-2 w-[30%]'>
                                                <div className='flex items-center mb-2' >
                                                    <img src={calendar} alt='calendar' className='w-6 h-6 mr-3' />
                                                    <span className='text-lg font-normal '>{invoice.sick_surgery_date}</span>
                                                </div>
                                                {/** price div */}
                                                <div key={sick.sick_id + index + 2} className='flex  items-center'>

                                                    <img src={money} alt='money' className='w-6 h-6 mr-3' /><span className='text-lg font-normal '>
                                                        {invoice.sick_surgery_invoice && invoice.sick_surgery_invoice
                                                            .map(data => data.surgery_type_price)
                                                            .reduce((a, c) => parseInt(a) + parseInt(c))
                                                        }
                                                    </span>
                                                </div>

                                            </div>

                                            {/** div surgery type u description */}
                                            <div className='text-start pl-2 w-full '>
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
                                            {/** image icon */}
                                            <div className='m-2 cursor-pointer flex ' >
                                                <img src={gallery} alt='fahs' onClick={() => { setIsVisible(true); setId(invoice.sick_surgery_id) }} />
                                                {isVisible && invoice.sick_surgery_id === id &&

                                                    <div className=' fixed z-20   inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center'>

                                                        <button className='text-white text-xl place-self-end  w-fit ' onClick={() => setIsVisible(false)}> X </button>
                                                        <MdChevronLeft className='opacity-50  cursor-pointer hover:opacity-100' onClick={slidLeft} size={40} />
                                                        <div id='slider' className='overflow-x-scroll scroll   scroll-smooth  scrollbar-hide whitespace-nowrap flex  justify-center w-[800px] items-center bg-white  rounded-md '>
                                                            {invoice.image && invoice.image.map((img, index) => {
                                                                return (
                                                                    <div key={img.sick_surgery_invoice_image_id} className=' w-[300px]  ' >
                                                                        <img className='object-cover p-3 pl-5 w-[400px] h-[400px]' src={'https://freepaidaccount.com/clinic/api/uploads/' + img.sick_surgery_invoice_image_name} alt="view" />
                                                                    </div>
                                                                )



                                                            })
                                                            }

                                                        </div>
                                                        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slidRight} size={40} />
                                                    </div>

                                                }




                                            </div>
                                        </div>
                                    )
                                })}


                                {/* <DetailViewImage isVisible={isVisible} setIsVisible={setIsVisible} /> */}
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


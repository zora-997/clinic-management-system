import React, { useContext } from 'react'
import { FaUser } from "react-icons/fa";
import { BsFillHeartPulseFill } from "react-icons/bs";
import medical from "../../../img/image/medical.png";
import medicalteam2 from "../../../img/image/medical-team (1).png";
import report from "../../../img/image/report.png";
import reportkall2 from "../../../img/image/reportkall2.png";
import GlobalContext from '../../contexts/createContext/context';

const CardBody = () => {

    const { doctorList, sickList, sickSurgery, appointmentList } = useContext(GlobalContext)


    return (
        <div className='mt-1 grid grid-cols-4 gap-x-5 w-full  '>

            <div style={{ backgroundColor: '#0171FE' }}
                className='pl-5 rounded-2xl  w-[251px] h-[120px] flex items-center justify-start  
                relative  py-3 overflow-hidden '>
                <div className='bg-white rounded-full'>
                    {/* <FaUsers style={{ color: '#0171FE' }} size={25} className=" relative  transition-colors duration-500 ease-in-out" /> */}
                    <img src={medical} alt="no doctor" className='w-8 m-2' />
                </div>
                <div className='flex flex-col  pt-3 pl-2 g transition-colors duration-500 ease-in-out'>
                    <span style={{ color: '#A3D5F9' }} className='text-sm  '>Active Doctor</span>
                    <span style={{ color: '#DFF4FD' }} className='text-xl pb-3 relative '>{doctorList.length}</span>
                </div>

                {/** icon kall */}
                <div>
                    {/* <FaUsers style={{ color: '#4196FF' }} size={83} className="absolute -right-1 top-12" /> */}
                    <img src={medicalteam2} alt="no doctor" className="absolute w-24 -right-1 top-11" />
                    <span className='absolute rounded-full w-28 h-28 bg-white/5 -left-10  -top-20 '></span>
                    <span className='absolute rounded-full w-32 h-32 bg-white/10 -left-10  -top-20 '></span>

                </div>
            </div>


            {/** card 3 */}
            <div style={{ backgroundColor: '#04D5C7' }}
                className='  pl-5 rounded-2xl  w-[251px] h-[120px] flex items-center justify-start i 
                relative py-3 overflow-hidden'>
                <div className='bg-white rounded-full p-3'>
                    <FaUser style={{ color: '#04D5C7' }} size={25} className=" relative  transition-colors duration-500 ease-in-out" />
                </div>
                <div className='flex flex-col  pt-3 pl-2 g transition-colors duration-500 ease-in-out'>
                    <span style={{ color: '#ACFFFB' }} className='text-sm  '>Active Sick</span>
                    <span style={{ color: '#EBFFFF' }} className='text-xl pb-3 relative '>{sickList.length}</span>
                </div>

                {/** icon kall */}
                <div>
                    <FaUser style={{ color: '#2CDED2' }} size={70} className="absolute  top-12 -right-2" />
                    <span className='absolute rounded-full w-28 h-28 bg-white/10 -left-10  -top-20 '></span>
                    <span className='absolute rounded-full w-32 h-32 bg-white/20 -left-10  -top-20 '></span>
                </div>
            </div>

            {/** card 2 */}
            <div style={{ backgroundColor: '#9284F7' }}
                className='  pl-5 rounded-2xl  w-[251px] h-[120px] flex items-center justify-start i 
                relative py-3 overflow-hidden'>
                <div className='bg-white rounded-full p-3'>
                    <BsFillHeartPulseFill style={{ color: '#9284F7' }} size={25} className=" relative  transition-colors duration-500 ease-in-out" />
                </div>
                <div className='flex flex-col  pt-3 pl-2 g transition-colors duration-500 ease-in-out'>
                    <span style={{ color: '#DBD3FF' }} className='text-sm'>Sick Surgery</span>
                    <span style={{ color: '#F8F6FF' }} className='text-xl pb-3 relative '>{sickSurgery.length}</span>
                </div>

                {/** icon kall */}
                <div>
                    <BsFillHeartPulseFill style={{ color: '#A398FB' }} size={87} className="absolute top-12 -right-2 " />
                    <span className='absolute rounded-full w-28 h-28 bg-white/5 -left-10  -top-20 '></span>
                    <span className='absolute rounded-full w-32 h-32 bg-white/10 -left-10  -top-20 '></span>
                </div>
            </div>



            {/** card 4 */}
            <div style={{ backgroundColor: '#FF996C' }}
                className='  pl-5 rounded-2xl  w-[251px] h-[120px] flex items-center justify-start i 
                relative py-3 overflow-hidden'>
                <div className='bg-white rounded-full p-3'>
                    <img src={report} alt="no doctor" />
                </div>
                <div className='flex flex-col  pt-3 pl-2 g transition-colors duration-500 ease-in-out'>
                    <span style={{ color: '#FFDFD1' }} className='text-sm'>Today Appointment</span>
                    <span style={{ color: '#F8F6FF' }} className='text-xl pb-3 relative '>{appointmentList.length}</span>
                </div>

                {/** icon kall */}
                <div>
                    {/* <TbReportAnalytics style={{ color: '#FFAC89' }} size={87} className="absolute top-12 -right-3" /> */}
                    <img src={reportkall2} alt="no doctor" className="absolute w-20 top-12  -right-3" />
                    <span className='absolute rounded-full w-28 h-28 bg-white/10 -left-10  -top-20 '></span>
                    <span className='absolute rounded-full w-32 h-32 bg-white/20 -left-10  -top-20 '></span>
                </div>
            </div>

        </div>
    )
}



export default CardBody


/* 
 card 2 
<div className=' bg-white rounded-lg shadow-sm w-56 h-32 flex items-center justify-around  
            relative  px-6 py-3 overflow-hidden font-medium transition-all  hover:bg-white group'>
    <span className="w-56 h-48  group-hover:w-80 group-hover:h-80 rounded rotate-[-40deg] bg-cyan-300 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-56 group-hover:translate-x-0"></span>
    <MdOutlineSick size={48} className="text-sky-400 relative group-hover:text-white transition-colors duration-500 ease-in-out" />
     <img src={sick} alt="no" className='w-16  relative group-hover:text-white transition-colors  duration-500 ' /> 

    <div className='flex flex-col items-center group-hover:text-white transition-colors duration-500 ease-in-out'>
        <span className='text-4xl pb-3 font-bold relative group-hover:text-white '>{sickList.length}</span>
        <span className=' text-slate-600 relative group-hover:text-white '>Sicks</span>
    </div>
</div>
 */



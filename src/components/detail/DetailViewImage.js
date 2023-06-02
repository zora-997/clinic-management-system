import React, { useContext, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import GlobalContext from '../contexts/createContext/context'
import { useLocation } from 'react-router-dom';
import ViewImageModal from '../layout/modal/ViewImageModal';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const DetailViewImage = () => {
    const { sickList } = useContext(GlobalContext);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    const slidLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;

    }

    const slidRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;

    }


    return (
        <div className='w-full  '>
            <div onClick={() => setIsVisible(true)} className='flex items-center cursor-pointer'>
                <span className='text-blue-500 tracking-wider mr-1'>View image</span>
                <HiArrowNarrowRight className='text-blue-500' />
            </div>

            <ViewImageModal isVisible={isVisible} setIsVisible={setIsVisible} />


        </div >
    )
}

export default DetailViewImage
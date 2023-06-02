import React, { useContext, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import GlobalContext from '../contexts/createContext/context'
import { useLocation } from 'react-router-dom';
import ViewImageModal from '../layout/modal/ViewImageModal';


const DetailViewImage = ({ isVisible, setIsVisible }) => {

    return (
        <div className='w-full  '>
            <ViewImageModal isVisible={isVisible} setIsVisible={setIsVisible} />
        </div >
    )
}

export default DetailViewImage
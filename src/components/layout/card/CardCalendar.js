import React, { useContext } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import GlobalContext from '../../contexts/createContext/context';


const CardCalendar = () => {

    const { fetchDashbordAppointment } = useContext(GlobalContext);

    const onChangeHandler = (selectDate) => {
        fetchDashbordAppointment(selectDate.toISOString().slice(0, 10))
    }
    return (
        <>
            <Calendar className=' min-w-full md:min-w-0 scale-95 place-self-stretch  rounded-2xl shadow-sm ' onChange={(newDate) => onChangeHandler(newDate)} />
        </>
    )
}

export default CardCalendar
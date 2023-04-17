import React, { useState, useContext } from 'react'
import GlobalContext from "../../contexts/createContext/context";
import LineChart from '../chart/LineChart';


const CardOne = () => {

    const { sickList } = useContext(GlobalContext);
    const [userData, setUserData] = useState({
        labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
        datasets: [
            {
                label: "Male",
                data: [100, 160, 120, 130, 145, 165, 175, 85],
                backgroundColor: "#156CDD",
                tension: 0.4,
                borderColor: "#156CDD",
                pointStyle: "circl",
                hoverBorderWidth: 1,
                borderJoinStyle: "round",
                pointBorderColor: "#156CDD",
                pointHoverBorderColor: "#156CDD",
                pointHoverBackgroundColor: "white",
                hoverBorderWidth: 2,
                pointHoverRadius: 5,

            },
            {
                label: "Female",
                data: [50, 100, 80, 95, 120, 125, 135, 55],
                backgroundColor: "#62C0BC",
                tension: 0.4,
                borderColor: "#62C0BC",
                borderJoinStyle: "round",
                pointBorderColor: "#62C0BC",
                pointHoverBorderColor: "#62C0BC",
                pointHoverBackgroundColor: "white",
                hoverBorderWidth: 2,
                pointHoverRadius: 5,

            },


        ]

    });

    return (
        <div className='flex justify-between w-[700px] items-center mt-6'>

            <LineChart chartData={userData} className="pl-8 pr-0" />

            {/** side bar body */}

        </div>
    )
}

export default CardOne
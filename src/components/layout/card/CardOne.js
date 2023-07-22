import React, { useState } from 'react'
import LineChart from '../chart/LineChart';


const CardOne = () => {


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
        <div className='mt-3  md:w-2/3  sm:h-[18rem] flex-1  '>
            <LineChart chartData={userData} />
        </div>

    )
}

export default CardOne
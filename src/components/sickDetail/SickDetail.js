import React, { useContext, useEffect, useState } from 'react'
import SickDetailHeader from './SickDetailHeader'
import SickDetailBodyTop from './SickDetailBodyTop'
import GlobalContext from '../contexts/createContext/context'
import SickDetailBodyBox from './SickDetailBodyBox'
import SickDetailInput from './SickDetailInput'
import api from "../../api/api";


const SickDetail = () => {
    const [sickDetail, setSickDetail] = useState({})
    const { doctorList } = useContext(GlobalContext);

    let data = localStorage.getItem("data")
    let username = JSON.parse(data).username;
    console.log(username);

    let id = doctorList.map(doctor => doctor.doctor_name === username && doctor.doctor_id).filter(d => d !== false)
    let doctor_id = id[0]

    useEffect(() => {

        const getAdmin = async () => {
            const res = await api.post('appointment/inrow.php', { doctor_id });
            console.log(res.data.data);
            setSickDetail(res.data.data);
        }

        const interval = setInterval(() => {
            getAdmin()
        }, 4000);

        return () => clearInterval(interval);
    }, [])





    // useEffect(async () => {
    //     console.log("use efect");
    //     const first = async () => {
    //         const admin = await api.post('admin/read.php');
    //         console.log(admin.data.data);

    //         admin.map(admin => {
    //             if (admin.admin_name === doctor_name) {
    //                 const res = api.post('appointment/inrow.php', { doctorr_id });
    //                 const data = res.data.data;
    //                 setSickDetail(data);
    //                 console.log(data);

    //             }
    //         })

    //     }

    //     first()

    //     const interval = setInterval(() => {
    //         first()
    //     }, 4000);

    //     return () => clearInterval(interval);
    // }, [])




    return (
        <div className="flex flex-col items-end  pb-5  w-full select-none font-body   ">

            {/** body  */}
            <div className=' font-body flex flex-col p-3 bg-white mr-5 w-[68rem]'>

                <SickDetailHeader sickDetail={sickDetail} />
                <SickDetailBodyTop sickDetail={sickDetail} setSickDetail={setSickDetail} />
                {sickDetail.doctor_id && <SickDetailInput sickDetail={sickDetail} setSickDetail={setSickDetail} />}

                <SickDetailBodyBox sickDetail={sickDetail} setSickDetail={setSickDetail} />




            </div>


        </div>
    )
}

export default SickDetail
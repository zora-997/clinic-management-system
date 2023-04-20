import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from "../contexts/createContext/context";
import { AddSickModal } from '../layout/modal/AddSickModal';
import SickModal from '../layout/modal/SickModal';

const Sick = () => {

    const { sickList, doctorList, searchSick, setDetailDoctorId } = useContext(GlobalContext);

    const history = useNavigate();

    const did = doctorList.map((d) => d.doctor_id)
    const dn = doctorList.map((d) => d.doctor_name)


    const [sick_id, setSick_id] = useState(0);
    const [sick_name, setSick_name] = useState("");
    const [sick_phone, setSick_phone] = useState("");
    const [sick_age, setSick_age] = useState(0);
    const [sick_gender, setSick_gender] = useState("");

    const [show, setShow] = useState(false);
    const [addshow, setAddShow] = useState(false);



    return (
        <div className=" flex flex-col items-end  pb-5  w-full select-none">
            <SickModal isVisible={show} onClose={setShow} sick_name={sick_name} setSick_name={setSick_name} sick_phone={sick_phone} setSick_phone={setSick_phone} sick_id={sick_id} sick_age={sick_age} setSick_age={setSick_age} sick_gender={sick_gender} setSick_gender={setSick_gender} />
            <AddSickModal isAddVisible={addshow} onClose={setAddShow} />

            {/** button u table hamui tyaya */}
            <div className='pr-12  mt-10'>
                <div className='flex justify-between w-full'>
                    <button onClick={() => setAddShow(true)} className=' border-cyan-200 shadow-gray-300 text-left text-xl  text-cyan-400 hover:text-cyan-300   duration-300 py-1  my-3'>Create Sick</button>
                </div>

                <table className=" overflow-hidden bg-white text-sm shadow-sm text-left text-gray-500 dark:text-gray-400  w-[1050px]">
                    <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 dark:bg-gray-700 dark:text-gray-400">
                        <tr className=''>
                            <th scope="col" className="px-5 py-3 text-center">Id</th>
                            <th scope="col" className=" py-3"> Name</th>
                            <th scope="col" className="px-6 py-3"> phone</th>
                            <th scope="col" className="px-6 py-3"> age</th>
                            <th scope="col" className=" py-3"> gender</th>
                            <th scope="col" className="px-6 py-3">Doctor name</th>
                            <th scope="col" className="px-6 py-3"> date</th>
                            <th scope="col" className="pr-2 py-3">Action</th>

                        </tr>
                    </thead>
                    <tbody className=''>

                        {searchSick(sickList).map((sick, index) => {
                            return (
                                <tr key={index}

                                    onDoubleClick={() => { setDetailDoctorId(sick.doctor_id); history(`/detail/${sick.sick_id}`) }}
                                    className="  border hover:w-44 cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300 ">
                                    <th scope='row' className="px-5 py-4">&nbsp;&nbsp; {index + 1}</th>
                                    <td className="py-4 w-56 ">{sick.sick_name}</td>
                                    <td className="px-6 py-4">{sick.sick_phone}</td>
                                    <td className="px-6 py-4">{sick.sick_age}</td>
                                    <td className="px-3 py-4">{sick.sick_gender}</td>
                                    <td className="px-6 py-4 w-56 ">{dn[did.indexOf(`${sick.doctor_id}`)]}</td>
                                    <td className="px-6 py-4">{sick.sick_date}</td>
                                    <td onClick={() => { setShow(true); setSick_name(sick.sick_name); setSick_phone(sick.sick_phone); setSick_age(sick.sick_age); setSick_gender(sick.sick_gender); setSick_id(sick.sick_id); }} className=" py-4">Edit</td>

                                </tr>



                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>

    )
}


export default Sick
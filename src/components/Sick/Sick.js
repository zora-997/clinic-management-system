import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from "../contexts/createContext/context";
import { AddSickModal } from '../layout/modal/AddSickModal';
import SickModal from '../layout/modal/SickModal';

const Sick = () => {

    const { sickList, doctorList, searchSick } = useContext(GlobalContext);

    const history = useNavigate();

    const did = doctorList.map((d) => d.doctor_id)
    const dn = doctorList.map((d) => d.doctor_name)


    const [sick_id, setSick_id] = useState(0);
    const [doctor_id, setDoctor_id] = useState(0);
    const [sick_name, setSick_name] = useState("");
    const [doctor_name, setDoctor_name] = useState("");
    const [sick_phone, setSick_phone] = useState("");
    const [sick_age, setSick_age] = useState(0);
    const [sick_gender, setSick_gender] = useState("");

    const [show, setShow] = useState(false);
    const [addshow, setAddShow] = useState(false);



    return (
        <div className="select-none">
            <SickModal
                isVisible={show}
                onClose={setShow}
                doctor_id={doctor_id}
                setDoctor_id={setDoctor_id}
                sick_name={sick_name}
                setSick_name={setSick_name}
                sick_phone={sick_phone}
                setSick_phone={setSick_phone}
                sick_id={sick_id}
                sick_age={sick_age}
                setSick_age={setSick_age}
                sick_gender={sick_gender}
                setSick_gender={setSick_gender}
                doctor_name={doctor_name} />
            <AddSickModal isAddVisible={addshow} onClose={setAddShow} />

            {/** button u table hamui tyaya */}
            <div className='mx-3 mt-10 bg-white rounded-md p-5 overflow-auto'>
                <div className='flex justify-between w-full'>
                    <button onClick={() => setAddShow(true)}
                        className={`
                     text-white shadow-sm flex items-center shadow-gray-300 border mb-2 
                      hover:text-cyan-400 border-cyan-300 h-fit p-1 px-9 rounded-md bg-cyan-500 hover:bg-transparent duration-200`}
                    >Create patient</button>
                </div>

                <table className=" overflow-hidden bg-white text-sm shadow-sm text-left text-gray-500  w-[1030px]">
                    <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
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

                                    onDoubleClick={() => { history(`/detail`, { state: sick.sick_id }) }}

                                    className="  border hover:w-44 cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300 ">
                                    <th scope='row' className="px-5 py-4">&nbsp;&nbsp; {index + 1}</th>
                                    <td className="py-4 w-56 ">{sick.sick_name}</td>
                                    <td className="px-6 py-4">{sick.sick_phone}</td>
                                    <td className="px-6 py-4">{sick.sick_age}</td>
                                    <td className="px-3 py-4">{sick.sick_gender}</td>
                                    <td className="px-6 py-4 w-56 ">{dn[did.indexOf(`${sick.doctor_id}`)]}</td>
                                    <td className="px-6 py-4">{sick.sick_date}</td>
                                    <td
                                        onClick={() => {
                                            setShow(true);
                                            setSick_name(sick.sick_name);
                                            setSick_phone(sick.sick_phone);
                                            setSick_age(sick.sick_age);
                                            setSick_gender(sick.sick_gender);
                                            setSick_id(sick.sick_id);
                                            setDoctor_id(sick.doctor_id)
                                            setDoctor_name(dn[did.indexOf(`${sick.doctor_id}`)])
                                        }} className=" py-4 "> <span className='hover:border-b hover:border-cyan-400 w-fit'>Edit</span></td>

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
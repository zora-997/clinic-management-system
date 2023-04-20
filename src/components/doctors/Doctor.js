import React, { useContext, useState } from 'react'
import GlobalContext from "../contexts/createContext/context";
import AddModal from '../layout/modal/AddModal';
import Modal from '../layout/modal/Modal';


const Doctors = () => {

    const { doctorList, searchDoctor } = useContext(GlobalContext);

    const [newDoctor_id, setDoctor_id] = useState(0);
    const [newName, setNewName] = useState("");
    const [newPercentage, setNewPercentage] = useState(0);

    const [show, setShow] = useState(false);
    const [addshow, setAddShow] = useState(false);

    // sort la gawra bo bchuk wa ba pechawa nawa la bchuk bo gawra
    let sort = doctorList.sort((a, b) => b.doctor_percentage - a.doctor_percentage);
    console.log(sort);

    return (

        <div className=" flex flex-col  items-center  w-full select-none">
            <Modal isVisible={show} onClose={setShow} doctor_name={newName} setNewName={setNewName} doctor_percentage={newPercentage} setNewPercentage={setNewPercentage} doctor_id={newDoctor_id} />
            <AddModal isAddVisible={addshow} onClose={setAddShow} />
            <div className='ml-36 mt-10'>
                <div className='place-self-start'>
                    <button onClick={() => setAddShow(true)} className='border-cyan-200 shadow-gray-300 text-left text-lg  text-cyan-400 hover:text-cyan-300  duration-300 py-1  my-3 '>Create Doctor</button>
                </div>
                <table className="whitespace-nowrap bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 dark:text-gray-400 w-[1000px]">
                    <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Id</th>
                            <th scope="col" className="px-6 py-3">Doctor Name</th>
                            <th scope="col" className="px-6 py-3">Percentage</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                        </tr>
                    </thead>
                    <tbody>


                        {searchDoctor(doctorList).map((doctor, index) => {
                            return <tr key={index} onClick={() => { setShow(true); setNewName(doctor.doctor_name); setNewPercentage(doctor.doctor_percentage); setDoctor_id(doctor.doctor_id) }}
                                className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                                <th scope='row' className="px-5 py-4">&nbsp;&nbsp;{index + 1}</th>
                                <td className="px-6 py-4">{doctor.doctor_name}</td>
                                <td className="px-6 py-4">{doctor.doctor_percentage} %</td>
                                <td className="px-6 py-4">{doctor.doctor_date}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

        </div>



    )
}

export default Doctors;










// am shewaia  ba be bakar henany useContext and useReducer


  //const [doctorList, setdoctorList] = useState([]);
  // setdoctorList(newDoctorsList);
    // useEffect(() => {
    //     // load all doctors.
    //     const fetchDoctors = async () => {
    //         const response = await api.get('/doctor');
    //         setdoctorList(response.data);

    //     }
    //     fetchDoctors();
    // }, [])






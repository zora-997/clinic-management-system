import React, { useContext, useState } from 'react'
import GlobalContext from "../contexts/createContext/context";
import AddSurgeryModal from '../layout/modal/AddSurgeryModal';
import SurgeryModal from '../layout/modal/SurgeryModal';



const SurgeryType = () => {

    const { surgeryType, searchSurgeryType } = useContext(GlobalContext);

    const [surgery_type_id, setSurgery_type_id] = useState(0);
    const [surgery_type_name, setSurgey_name] = useState("");
    const [surgery_type_price, setSurgey_price] = useState(0);

    const [show, setShow] = useState(false);
    const [addshow, setAddShow] = useState(false);

    return (

        <div className="select-none ">
            <div>
                <SurgeryModal isVisible={show} onClose={setShow} surgery_type_name={surgery_type_name} setSurgey_name={setSurgey_name} surgery_type_price={surgery_type_price} setSurgey_price={setSurgey_price} surgery_type_id={surgery_type_id} />
                <AddSurgeryModal isAddVisible={addshow} onClose={setAddShow} />

                <div className='mx-3 mt-10 bg-white overflow-auto rounded-md  p-5  '>
                    <div className='flex justify-between'>
                        <button onClick={() => setAddShow(true)}
                            className={`
                     text-white shadow-sm flex items-center shadow-gray-300 border mb-2 
                      hover:text-cyan-400 border-cyan-300 h-fit p-1 px-9 rounded-md bg-cyan-500 hover:bg-transparent duration-200`}>Create working type</button>
                    </div>
                    <table className="bg-white overflow-hidden text-sm shadow-sm text-left text-gray-500 w-full">
                        <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">Id</th>
                                <th scope="col" className="px-6 py-3">name</th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {searchSurgeryType(surgeryType).map((surgery, index) => {
                                return <tr key={index}
                                    onClick={() => { setShow(true); setSurgey_name(surgery.surgery_type_name); setSurgey_price(surgery.surgery_type_price); setSurgery_type_id(surgery.surgery_type_id) }}
                                    className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300 ">
                                    <th scope='row' className="px-5 py-4">&nbsp;&nbsp;{index + 1}</th>
                                    <td className="px-6 py-4">{surgery.surgery_type_name}</td>
                                    <td className="px-6 py-4">{surgery.surgery_type_price}</td>
                                    <td className="px-6 py-4">{surgery.surgery_type_date}</td>
                                </tr>

                            })}

                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    )
}

export default SurgeryType;










// am shewaia  ba be bakar henany useContext and useReducer


  //const [surgeryType, setsurgeryType] = useState([]);
  // setsurgeryType(newsurgerysList);
    // useEffect(() => {
    //     // load all surgerys.
    //     const fetchsurgerys = async () => {
    //         const response = await api.get('/surgery');
    //         setsurgeryType(response.data);

    //     }
    //     fetchsurgerys();
    // }, [])






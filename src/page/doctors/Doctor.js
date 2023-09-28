import React, { useContext, useState } from 'react'
import GlobalContext from "../../contexts/createContext/context";
import AddDoctorModal from '../../components/modal/AddDoctorModal';
import DoctorModal from '../../components/modal/DoctorModal';
import ButtonCreate from '../../components/ui/button/ButtonCreate';
import Table from '../../components/ui/table/Table';


const Doctors = () => {
    // sort la gawra bo bchuk wa ba pechawa nawa la bchuk bo gawra
    // let sort = doctorList.sort((a, b) => b.doctor_percentage - a.doctor_percentage);

    // context for share data
    const { doctorList, searchDoctor } = useContext(GlobalContext);
    //change input
    const [newDoctor_id, setDoctor_id] = useState(0);
    const [newName, setNewName] = useState("");
    const [newPercentage, setNewPercentage] = useState(0);
    //pshan dani modallakan
    const [show, setShow] = useState(false);
    const [addshow, setAddShow] = useState(false);
    // datay (thead , tbody)
    const thead = ["Id", "Doctor Name", "Percentage", "Date"]
    const tbody = ["doctor_name", "doctor_percentage", "doctor_date"]
    //am change bo aw input naia ka update akren yan delete akren, bo away la naw setState ka tanha awana da bne ka to atawe
    const change = ["doctor_name", "doctor_percentage", "doctor_id"]
    const setState = [setNewName, setNewPercentage, setDoctor_id]


    return (
        <div className="select-none">
            <DoctorModal isVisible={show} onClose={setShow} doctor_name={newName} setNewName={setNewName} doctor_percentage={newPercentage} setNewPercentage={setNewPercentage} doctor_id={newDoctor_id} />
            <AddDoctorModal isAddVisible={addshow} onClose={setAddShow} />
            <div className=' bg-white overflow-auto mx-3  mt-10 rounded-md  p-5 '>
                <ButtonCreate setAddShow={setAddShow} buttonName="Create Doctor" />
                <Table thead={thead} data={doctorList} search={searchDoctor} tbody={tbody} setState={setState} setShow={setShow} change={change} />
            </div>
        </div>
    )
}

export default Doctors;
















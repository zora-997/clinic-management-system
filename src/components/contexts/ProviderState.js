import React, { useReducer, useEffect, useState } from 'react'
import reducer from "./reducer/reducer";
import GlobalContext from "../contexts/createContext/context";
import api from "../../api/api";
import {
    ADD_DOCTOR,
    DELETE_DOCTOR,
    UPDATE_DOCTOR,
    ADD_SURGERY_TYPE,
    DELETE_SURGERY_TYPE,
    UPDATE_SURGERY_TYPE,
    ADD_SICK,
    UPDATE_SICK,
    DELETE_SICK,
    SET_TYPE_OF_WORK,
    DELETE_EXPENSE_TYPE,
    UPDATE_EXPENSE_TYPE,
    ADD_EXPENSE_TYPE,
    ADD_EXPENSE,
    DELETE_EXPENSE,
    UPDATE_EXPENSE,
    ADD_APPOINTMENT,
    UPDATE_APPOINTMENT,
    DELETE_APPOINTMENT,
    CHANGE_STATE_APPOINTMENT

} from "../contexts/actions/action";


const ProviderState = ({ children }) => {

    const initialState = {
        doctorList: [],
        surgeryType: [],
        sickList: [],
        sickSurgery: [],
        expenseTypeList: [],
        expenseList: [],
        adminList: [],
        mainReportList: [],
        appointmentList: []
    }

    const [query, setQuery] = useState("")
    const [sick_id, setDetailSickId] = useState(0)

    const [state, dispatch] = useReducer(reducer, initialState)


    const [ddate, setDate] = useState(new Date().toISOString().slice(0, 10));

    // load all doctors.
    useEffect(() => {
        fetchDoctors();
        fetchSick();
        fetchSurgeryType();
        fetchSickSurgery();
        fetchExpenseType();
        fetchExpense();
        fetchAppointment(ddate);



    }, [])

    // doctor search
    const searchDoctor = (data) => {
        return data.filter((item) => query.toLowerCase() === '' ? item : item.doctor_name.toLowerCase().includes(query))
    }

    // sick search
    const searchSick = (data) => {
        return data.filter((item) => query.toLowerCase() === '' ? item : item.sick_name.toLowerCase().includes(query))
    }

    // sick search
    const searchSurgeryType = (data) => {
        return data.filter((item) => query.toLowerCase() === '' ? item : item.surgery_type_name.toLowerCase().includes(query))
    }

    // Expense type search
    const searchExpenseType = (data) => {
        return data.filter((item) => query.toLowerCase() === '' ? item : item.expense_type_name.toLowerCase().includes(query))
    }
    // Expense type search
    const searchExpense = (data) => {
        return data && data.filter((item) => query.toLowerCase() === '' ? item : item.expense_date.toLowerCase().includes(query))
    }

    // Appointment search
    const searchAppointment = (data) => {
        return data.filter((item) => query.toLowerCase() === '' ? item : item.sick_name.toLowerCase().includes(query))
    }

    // feach appointment
    const fetchAppointment = async (ddate) => {
        const res = await api.post('appointment/read.php', { ddate });
        dispatch({
            type: 'GETAPPOINTMENT',
            payload: res.data.data
        })

    }
    // fetchDashbordAppointment
    const fetchDashbordAppointment = async (ddate) => {

        const res = await api.post('appointment/read.php', { ddate });
        dispatch({
            type: 'GETAPPOINTMENT',
            payload: res.data.data
        })
    }

    // add appointment
    const addAppointment = async (appointment, ddate) => {
        // aw ddate bo awaya la katy druskrdni appointment yaksar datakaw bo feach bka bikata naw table appointment

        const res = await api.post('appointment/create.php', appointment);
        fetchAppointment(ddate)

        dispatch({
            type: ADD_APPOINTMENT,
            payload: appointment
        })
    }

    // delete Appointment
    const deleteAppointment = async (appointment_id) => {
        const res = await api.post('appointment/delete.php', { "appointment_id": appointment_id });

        dispatch({
            type: DELETE_APPOINTMENT,
            payload: appointment_id
        })
    }

    // update Appointment
    const updateAppointment = async (appointment, ddate) => {
        const res = await api.post('appointment/update.php', appointment);

        fetchAppointment(ddate);
        dispatch({
            type: UPDATE_APPOINTMENT,
            payload: appointment.appointment_id
        })
    }

    // change state Appointment
    const ChangeStateAppointment = async (changeState, ddate) => {
        await api.post('appointment/changestate.php', changeState);

        dispatch({
            type: CHANGE_STATE_APPOINTMENT,
            payload: changeState.appointment_id
        })
        fetchAppointment(ddate);


    }

    let re;
    // inrow Appointment
    const inrowAppointment = async (doctor_id) => {
        const res = await api.post('appointment/inrow.php', { doctor_id });
        console.log(res.data.data);
        return res.data.data

    }




    //   feach admin
    const fetchAdmin = async (admin) => {
        const res = await api.get('admin/login.php', admin);
        console.log(res.data);
        dispatch({
            type: 'GETADMIN',
            payload: res.data
        })
    }

    //  feach main report
    const fetchReport = async (date) => {
        const res = await api.post('report/mainreport.php', date);
        dispatch({
            type: 'GETREPORT',
            payload: res.data
        })
        // console.log(res.data.doctor.map(i => i.doctor_name));

    }


    //************************************* expense type ******************* */

    //  AllExpensetyoe
    const fetchExpenseType = async () => {
        const res = await api.get('expense_type/read.php');
        dispatch({
            type: 'GETEXPENSETYPE',
            payload: res.data.data
        })

    }


    // delete ExpenseType
    const deleteExpenseType = async (expense_type_id) => {
        await api.post('expense_type/delete.php', { "expense_type_id": expense_type_id });
        dispatch({
            type: DELETE_EXPENSE_TYPE,
            payload: expense_type_id
        })
    }

    // update expense
    const updateExpenseType = async (expensetype) => {
        await api.post('expense_type/update.php', expensetype);
        fetchExpenseType();
        dispatch({
            type: UPDATE_EXPENSE_TYPE,
            payload: expensetype.expense_type_id
        })
    }

    // add expense type
    const addExpenseType = async (expenseType) => {
        await api.post('expense_type/create.php', expenseType);
        fetchExpenseType();
        dispatch({
            type: ADD_EXPENSE_TYPE,
            payload: expenseType
        })
    }
    //************************************* expense ******************* */

    //  AllExpense
    const fetchExpense = async () => {
        const res = await api.get('expense/read.php');
        dispatch({
            type: 'GETEXPENSE',
            payload: Object.values(res.data.data)
        })
    }

    // add expense 
    const addExpense = async (expense) => {
        await api.post('expense/create.php', expense);
        fetchExpense();
        dispatch({
            type: ADD_EXPENSE,
            payload: expense
        })
    }

    // delete ExpenseType
    const deleteExpense = async (expense_id) => {
        await api.post('expense/delete.php', { "expense_id": expense_id });
        dispatch({
            type: DELETE_EXPENSE,
            payload: expense_id
        })
    }

    // update expense
    const updateExpense = async (expense) => {
        await api.post('expense/update.php', expense);
        fetchExpense();
        dispatch({
            type: UPDATE_EXPENSE,
            payload: expense.expense_id
        })
    }








    // all doctor
    const fetchDoctors = async () => {
        const res = await api.get('doctor/read.php');

        dispatch({
            type: 'GET',
            payload: res.data.data
        })
    }

    // all surgeryType
    const fetchSurgeryType = async () => {
        const res = await api.get('surgery_type/read.php');
        dispatch({
            type: 'GETSURGERY',
            payload: res.data.data
        })
    }


    // all sick
    const fetchSick = async () => {
        const { data } = await api.get('sick/read.php');

        dispatch({
            type: 'GETSICK',
            payload: data.data
        })
    }

    // all sick surgery
    const fetchSickSurgery = async () => {
        const { data } = await api.get('sick_surgery/read.php');

        dispatch({
            type: 'GETSICKSURGERY',
            payload: data.data
        })
    }

    //***************************************************************************************** */

    // add doctor
    const addDoctor = async (doctor) => {
        await api.post('doctor/create.php', doctor);
        fetchDoctors();
        dispatch({
            type: ADD_DOCTOR,
            payload: doctor
        })
    }


    // update doctor
    const updateDoctor = async (update_doctor) => {
        const res = await api.post('doctor/update.php', update_doctor);
        console.log(res.data)
        fetchDoctors();
        dispatch({
            type: UPDATE_DOCTOR,
            payload: update_doctor.doctor_id
        })
    }

    // delete Doctoe
    const deleteDoctor = async (doctor_id) => {
        await api.post('doctor/delete.php', { "doctor_id": doctor_id });
        dispatch({
            type: DELETE_DOCTOR,
            payload: doctor_id
        })
    }

    ////************************************************************************************ */


    //*********  surgery function */


    // add surgery
    const addSurgeryType = async (surgery) => {
        await api.post('surgery_type/create.php', surgery);
        fetchSurgeryType();
        dispatch({
            type: ADD_SURGERY_TYPE,
            payload: surgery
        })
    }

    // delete surgery
    const deleteSurgery = async (surgery_type_id) => {
        await api.post('surgery_type/delete.php', { "surgery_type_id": surgery_type_id });
        dispatch({
            type: DELETE_SURGERY_TYPE,
            payload: surgery_type_id
        })
    }

    // update Surgery 
    const updateSurgery = async (surgery) => {
        await api.post('surgery_type/update.php', surgery);
        fetchSurgeryType();
        dispatch({
            type: UPDATE_SURGERY_TYPE,
            payload: surgery.surgery_type_id
        })
    }



    //************    Sick   */

    // add doctor
    const addSick = async (sick) => {
        const res = await api.post('sick/create.php', sick);
        fetchSick();
        console.log(res.data);
        dispatch({
            type: ADD_SICK,
            payload: sick
        })
    }

    // update Sick 
    const updateSick = async (sick) => {
        const res = await api.post('sick/update.php', sick);
        console.log(res.data);
        fetchSick();
        dispatch({
            type: UPDATE_SICK,
            payload: sick,
        })
    }

    // delete sick
    const deleteSick = async (sick_id) => {
        await api.post('sick/delete.php', { "sick_id": sick_id });
        dispatch({
            type: DELETE_SICK,
            payload: sick_id
        })
    }

    // add sick surgery
    const addSickSurgery = async (formData) => {
        // ba kar hatwa la <DetailBodyInput />
        await api.post('sick_surgery/createe.php', formData)
        dispatch({
            type: SET_TYPE_OF_WORK,
            payload: formData
        })
        fetchSickSurgery();
        fetchSick();
    }


    const deleteSurgeryImage = async (sick_surgery_invoice_image_id) => {
        // ba kar hatwa la <DetailBodyInput />
        console.log(sick_surgery_invoice_image_id);
        const res = await api.post('sick_surgery/delete_image.php', { "sick_surgery_invoice_image_id": sick_surgery_invoice_image_id })
        console.log(res);
        fetchSickSurgery();
        fetchSick();
    }


    const deletSickSurgery = async (sick_surgery_id) => {
        // ba kar hatwa la <DetailBodyInput />
        console.log(sick_surgery_id);
        await api.post('sick_surgery/delete.php', { "sick_surgery_id": sick_surgery_id })

        fetchSickSurgery();
        fetchSick();
    }

    // ama update naw price u date aka la commponenty SurgeryTypeModal
    const UpdateSickSurgery = async (formData) => {
        await api.post('sick_surgery/update.php', formData);
        fetchSickSurgery();
        fetchSick();
    }

    // ama update price u description aka la commponenty WorkingTypeModal
    const UpdateSickSurgeryInvoice = async (sick_surgery_invoice) => {
        await api.post('sick_surgery_invoice/update.php', sick_surgery_invoice);

        fetchSickSurgery();
        fetchSick();
    }






    return (
        <GlobalContext.Provider value={{
            doctorList: state.doctorList,
            addDoctor,
            updateDoctor,
            deleteDoctor,
            surgeryType: state.surgeryType,
            addSurgeryType,
            deleteSurgery,
            updateSurgery,
            sickList: state.sickList,
            addSick,
            updateSick,
            deleteSick,
            query,
            setQuery,
            searchDoctor,
            searchSick,
            searchSurgeryType,
            sick_id,
            setDetailSickId,

            sickSurgery: state.sickSurgery,
            addSickSurgery,
            expenseTypeList: state.expenseTypeList,
            searchExpenseType,
            deleteExpenseType,
            updateExpenseType,
            addExpenseType,
            expenseList: state.expenseList,
            addExpense,
            updateExpense,
            deleteExpense,
            searchExpense,
            adminList: state.adminList,
            mainReportList: state.mainReportList,
            fetchReport,
            fetchAdmin,
            appointmentList: state.appointmentList,
            addAppointment,
            fetchAppointment,
            fetchDashbordAppointment,
            deleteAppointment,
            updateAppointment,
            setDate,
            ddate,
            ChangeStateAppointment,
            inrowAppointment,
            searchAppointment,
            deleteSurgeryImage,
            deletSickSurgery,
            UpdateSickSurgery,
            UpdateSickSurgeryInvoice

        }}>
            {/** am div bo awaya header ka la gall body ka wa column dar kawn wa la sidbar ka bn ba dw div flex */}
            <div className='flex flex-col'>
                {children}
            </div>
        </GlobalContext.Provider>
    )
}

export default ProviderState;
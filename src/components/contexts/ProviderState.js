import React, { useReducer, useEffect, useState } from 'react'
import reducer from "./reducer/reducer";
import GlobalContext from "../contexts/createContext/context";
import api from "../../api/api";
import {
    DELETE_DOCTOR,
    DELETE_SURGERY_TYPE,
    DELETE_SICK,
    DELETE_EXPENSE_TYPE,
    DELETE_EXPENSE,
    DELETE_APPOINTMENT,
    DELETE_USER,
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
        appointmentList: [],
        appointmentListDashbord: [],
        doctorlegerList: [],
        expenseReportList: [],
        workingTypeReportList: [],
        userList: [],
    }

    const [query, setQuery] = useState("")
    const [state, dispatch] = useReducer(reducer, initialState)



    // load all doctors.
    useEffect(() => {
        fetchDoctors();
        fetchSick();
        fetchSurgeryType();
        fetchSickSurgery();
        fetchExpenseType();
        fetchExpense();
        fetchUser();


    }, [])

    // doctor search
    const searchDoctor = (data) => {
        return data.filter((item) => query.toLowerCase() === '' ? item : item.doctor_name.toLowerCase().includes(query))
    }

    // user search
    const searchUser = (data) => {
        return data.filter((item) => query.toLowerCase() === '' ? item : item.admin_name.toLowerCase().includes(query))
    }

    // sick search
    const searchSick = (data) => {
        return data.filter((item) => query.toLowerCase() === '' ? item : item.sick_phone.toLowerCase().includes(query))
    }

    // searchSurgeryType search
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

        console.log("ddate");
        console.log(ddate);
        const res = await api.post('appointment/read.php', { ddate });
        console.log(res.data);
        dispatch({
            type: 'GETAPPOINTMENT',
            payload: res.data.data
        })

    }
    // // fetchDashbordAppointment
    const fetchDashbordAppointment = async (ddate) => {
        const res = await api.post('appointment/read.php', { ddate });
        console.log(res.data);
        dispatch({
            type: 'GETAPPOINTMENTDASHBORD',
            payload: res.data.data
        })
    }

    // add appointment
    const addAppointment = async (appointment, ddate) => {
        // aw ddate bo awaya la katy druskrdni appointment yaksar datakaw bo feach bka bikata naw table appointment
        await api.post('appointment/create.php', appointment);
        fetchAppointment(ddate)
    }

    // delete Appointment
    const deleteAppointment = async (appointment_id) => {
        await api.post('appointment/delete.php', { "appointment_id": appointment_id });
        dispatch({
            type: DELETE_APPOINTMENT,
            payload: appointment_id
        })
    }

    // update Appointment
    const updateAppointment = async (appointment, ddate) => {
        await api.post('appointment/update.php', appointment);
        fetchAppointment(ddate);
    }

    // change state Appointment
    const ChangeStateAppointment = async (changeState, ddate) => {
        await api.post('appointment/changestate.php', changeState);
        fetchAppointment(ddate);
    }


    // inrow Appointment
    const inrowAppointment = async (doctor_id) => {
        const res = await api.post('appointment/inrow.php', { doctor_id });
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
    const fetchReport = async (data) => {
        const res = await api.post('report/mainreport.php', data);
        dispatch({
            type: 'GETREPORT',
            payload: res.data
        })
    }

    //  feach main report
    const fetchDoctorlegerReport = async (date) => {
        const res = await api.post('report/doctorleger.php', date);
        dispatch({
            type: 'GETDOCTORREPORT',
            payload: res.data
        })
    }

    //  feach expense report
    const fetchExpensereportReport = async (data) => {
        const res = await api.post('report/expensereport.php', data);
        dispatch({
            type: 'GETEXPENSEREPORT',
            payload: res.data
        })

    }

    //  feach expense report
    const fetchWorkingTypeReportReport = async (data) => {
        const res = await api.post('report/workingtypereport.php', data);
        dispatch({
            type: 'GETWORKINGTYPEREPORT',
            payload: res.data
        })
        console.log(res.data);
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
    }

    // add expense type
    const addExpenseType = async (expenseType) => {
        await api.post('expense_type/create.php', expenseType);
        fetchExpenseType();
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
    }


    // all doctor
    const fetchDoctors = async () => {
        const res = await api.get('doctor/read.php');
        dispatch({
            type: 'GET',
            payload: res.data.data
        })
    }

    // all user
    const fetchUser = async () => {
        const res = await api.get('admin/read.php');
        dispatch({
            type: 'GETUSER',
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
        console.log(data);
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

    //**************** users **************** */

    // add user
    const addUser = async (user) => {
        await api.post('admin/create.php', user);
        fetchUser();
        // dispatch({
        //     type: ADD_USER,
        //     payload: user
        // })
    }

    // update user
    const updateUser = async (updateUser) => {
        await api.post('admin/update.php', updateUser);

        fetchUser();
        // dispatch({
        //     type: UPDATE_USER,
        //     payload: updateUser.admin_id
        // })
    }


    // delete user
    const deleteUser = async (admin_id) => {
        console.log(admin_id);
        await api.post('admin/delete.php', { "admin_id": admin_id });
        dispatch({
            type: DELETE_USER,
            payload: admin_id
        })

    }



    //*********************************************** doctor ****************************************** */

    // add doctor
    const addDoctor = async (doctor) => {
        await api.post('doctor/create.php', doctor);
        fetchDoctors();
    }


    // update doctor
    const updateDoctor = async (update_doctor) => {
        await api.post('doctor/update.php', update_doctor);
        fetchDoctors();
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
    }



    //************    Sick   */

    // add doctor
    const addSick = async (sick) => {
        await api.post('sick/create.php', sick);
        fetchSick();
    }

    // update Sick 
    const updateSick = async (sick) => {
        await api.post('sick/update.php', sick);
        fetchSick();
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
        const res = await api.post('sick_surgery/createe.php', formData)
        console.log(res.data);
        fetchSickSurgery();
        fetchSick();
    }


    const deleteSurgeryImage = async (sick_surgery_invoice_image_id) => {
        // ba kar hatwa la <DetailBodyInput />
        console.log(sick_surgery_invoice_image_id);
        await api.post('sick_surgery/delete_image.php', { "sick_surgery_invoice_image_id": sick_surgery_invoice_image_id })
        fetchSickSurgery();
        fetchSick();
    }


    const deletSickSurgery = async (sick_surgery_id) => {
        // ba kar hatwa la <DetailBodyInput />
        const res = await api.post('sick_surgery/delete.php', { "sick_surgery_id": sick_surgery_id })
        console.log(res.data);
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
        const res = await api.post('sick_surgery_invoice/update.php', sick_surgery_invoice);
        console.log(res.data);
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
            appointmentListDashbord: state.appointmentListDashbord,
            addAppointment,
            fetchAppointment,
            fetchDashbordAppointment,
            deleteAppointment,
            updateAppointment,


            ChangeStateAppointment,
            inrowAppointment,
            searchAppointment,
            deleteSurgeryImage,
            deletSickSurgery,
            UpdateSickSurgery,
            UpdateSickSurgeryInvoice,

            fetchDoctorlegerReport,
            doctorlegerList: state.doctorlegerList,

            fetchExpensereportReport,
            expenseReportList: state.expenseReportList,

            fetchWorkingTypeReportReport,
            workingTypeReportList: state.workingTypeReportList,

            addUser,
            updateUser,
            deleteUser,
            searchUser,
            userList: state.userList,




        }}>
            {/** am div bo awaya header ka la gall body ka wa column dar kawn wa la sidbar ka bn ba dw div flex */}
            <div className='flex flex-col'>
                {children}
            </div>
        </GlobalContext.Provider>
    )
}

export default ProviderState;
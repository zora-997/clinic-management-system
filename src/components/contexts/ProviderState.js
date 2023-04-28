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
    UPDATE_EXPENSE
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
        mainReportList: []
    }

    const [query, setQuery] = useState("")
    const [sick_id, setDetailSickId] = useState(0)
    const [doctor_id, setDetailDoctorId] = useState(0)


    const [state, dispatch] = useReducer(reducer, initialState)

    // load all doctors.
    useEffect(() => {
        fetchDoctors();
        fetchSick();
        fetchSurgeryType();
        fetchSickSurgery();
        fetchExpenseType();
        fetchExpense();
        fetchAdmin();


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

    //   feach admin
    const fetchAdmin = async () => {
        const res = await api.get('admin/read.php');
        dispatch({
            type: 'GETADMIN',
            payload: res.data.data
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
        await api.post('sick/create.php', sick);
        fetchSick();
        dispatch({
            type: ADD_SICK,
            payload: sick
        })
    }

    // update Sick 
    const updateSick = async (sick) => {
        await api.post('sick/update.php', sick);
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
    const addSickSurgery = async (sickSurgery) => {
        await api.post('sick_surgery/create.php', sickSurgery);
        dispatch({
            type: SET_TYPE_OF_WORK,
            payload: sickSurgery
        })
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
            doctor_id,
            setDetailDoctorId,
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
            fetchReport


        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ProviderState;
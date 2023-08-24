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
    DELETE_EXPENSE,
    UPDATE_EXPENSE,
    ADD_EXPENSE,
    ADD_APPOINTMENT,
    UPDATE_APPOINTMENT,
    DELETE_APPOINTMENT,
    CHANGE_STATE_APPOINTMENT
} from "../actions/action";


const reducer = (state, { type, payload }) => {
    switch (type) {
        case ADD_DOCTOR:
            return {
                ...state,
                doctorList: [...state.doctorList, payload]
            };
        case UPDATE_DOCTOR:
            return {
                ...state,
                doctorList: state.doctorList.map((doc) => {
                    return doc.doctor_id === payload ? payload : state
                })
            };
        case DELETE_DOCTOR:
            return {
                ...state,
                doctorList: state.doctorList.filter((doctor) => doctor.doctor_id !== payload),
            };
        case 'GET':
            return {
                ...state,
                doctorList: payload
            };

        case 'GETSURGERY':
            return {
                ...state,
                surgeryType: payload,
            };
        case ADD_SURGERY_TYPE:
            return {
                ...state,
                surgeryType: [...state.surgeryType, payload]
            };
        case DELETE_SURGERY_TYPE:
            return {
                ...state,
                surgeryType: state.surgeryType.filter((surgery) => surgery.surgery_type_id !== payload),
            };
        case UPDATE_SURGERY_TYPE:
            return {
                ...state,
                surgeryType: state.surgeryType.map((surgery) => {
                    return surgery.surgery_type_id === payload ? payload : state
                })
            };

        case 'GETSICK':
            return {
                ...state,
                sickList: payload,
            };
        case ADD_SICK:
            return {
                ...state,
                sickList: [...state.sickList, payload]
            };
        case UPDATE_SICK:
            return {
                ...state,
                sickList: state.sickList.map((sick) => {
                    return sick.sick_id === payload.sick_id ? payload : state
                })
            };
        case DELETE_SICK:
            return {
                ...state,
                sickList: state.sickList.filter((sick) => sick.sick_id !== payload),
            };
        case SET_TYPE_OF_WORK:
            return {
                ...state,
                sickSurgery: [...state.sickSurgery, payload]
            };
        case 'GETSICKSURGERY':
            return {
                ...state,
                sickSurgery: payload,
            };
        //******************* Expense Type ************************** */
        case 'GETEXPENSETYPE':
            return {
                ...state,
                expenseTypeList: payload,
            };
        case DELETE_EXPENSE_TYPE:
            return {
                ...state,
                expenseTypeList: state.expenseTypeList.filter((expense) => expense.expense_type_id !== payload),
            };
        case UPDATE_EXPENSE_TYPE:
            return {
                ...state,
                expenseTypeList: state.expenseTypeList.map((expense) => {
                    return expense.expense_type_id === payload ? payload : state
                })
            };
        case ADD_EXPENSE_TYPE:
            return {
                ...state,
                expenseTypeList: [...state.expenseTypeList, payload]
            };
        ///************* expense ***** */
        case 'GETEXPENSE':
            return {
                ...state,
                expenseList: payload,
            };
        case ADD_EXPENSE:
            return {
                ...state,
                expenseList: [...state.expenseList, payload]
            };
        case UPDATE_EXPENSE:
            return {
                ...state,
                expenseList: state.expenseList.map((expense) => {
                    return expense.expense_id === payload ? payload : state
                })
            };
        case DELETE_EXPENSE:
            return {
                ...state,
                expenseList: state.expenseList.filter((expense) => expense.expense_id !== payload),
            };
        ///************* admin ***** */
        case 'GETADMIN':
            return {
                ...state,
                adminList: payload,
            };
        ///************* report main***** */
        case 'GETREPORT':
            return {
                ...state,
                mainReportList: payload,
            };
        ///************* report doctor ***** */
        case 'GETDOCTORREPORT':
            return {
                ...state,
                doctorlegerList: payload,
            };

        ///************* report expense ***** */
        case 'GETEXPENSEREPORT':
            return {
                ...state,
                expenseReportList: payload,
            };

        ///************* report WORKING TYPE ***** */
        case 'GETWORKINGTYPEREPORT':
            return {
                ...state,
                workingTypeReportList: payload,
            };

        ///************* APPOINTMENT ***** */
        case 'GETAPPOINTMENT':
            return {
                ...state,
                appointmentList: payload,
            };
        case ADD_APPOINTMENT:
            return {
                ...state,
                appointmentList: [...state.appointmentList, payload]
            };
        case DELETE_APPOINTMENT:
            return {
                ...state,
                appointmentList: state.appointmentList.filter((appointment) => appointment.appointment_id !== payload),
            };
        case UPDATE_APPOINTMENT:
            return {
                ...state,
                appointmentList: state.appointmentList.map((appointment) => {
                    return appointment.appointment_id === payload ? payload : state
                })
            };
        case CHANGE_STATE_APPOINTMENT:
            return {
                ...state,
                appointmentList: state.appointmentList.map((appointment) => {
                    return appointment.appointment_id === payload ? payload : state
                })
            };

        default:
            return state;
    }
}

export default reducer;
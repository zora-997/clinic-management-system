import { Routes, Route, Navigate } from "react-router-dom";
import ProviderState from "./components/contexts/ProviderState";
import AllDoctor from "./components/doctors/allDoctor/AllDoctor";
import Doctors from "./components/doctors/Doctor";

import AllSick from "./components/Sick/allSick/AllSick";
import Sick from "./components/Sick/Sick";
import AllSurgeryType from "./components/SurgeryType/allSurgery/AllSurgeryType";
import SurgeryType from "./components/SurgeryType/SurgeryType";
import AllDetail from "./components/detail/alldetail/AllDetail";
import Detail from "./components/detail/Detail";
import Dashbord from "./page/home/dashbord/Dashbord";

import Login from "./page/Login";

import ExpenseType from "./components/expensetype/ExpenseType";
import AllExpenseType from "./components/expensetype/allExpenseType/AllExpenseType";

import AllExpense from "./components/expense/allExpense/AllExpense";
import Expense from "./components/expense/Expense";




//import Main from "./page/home/main/Main";

const MainRoutes = () => {
    return (
        <ProviderState>
            <Routes>
                {/* page */}
                <Route exact path="/" element={<Navigate replace to="login" />} />
                <Route exact path="login" element={<Login />} />
                <Route exact path="dashbord" element={<Dashbord />} />

                {/* Doctor */}
                <Route exact path="/" element={<AllDoctor />} >
                    <Route exact path="doctor" element={<Doctors />} />
                </Route>

                {/* sick */}
                <Route exact path="/" element={<AllSick />} >
                    <Route exact path="sick" element={<Sick />} />
                </Route>

                {/* surgery route */}
                <Route exact path="/" element={<AllSurgeryType />} >
                    <Route exact path="surgeryType" element={<SurgeryType />} />
                </Route>

                {/* detail route */}
                <Route exact path="/" element={<AllDetail />} >
                    <Route exact path="detail" element={<Detail />} />
                </Route>

                {/* Expense type */}
                <Route exact path="/" element={<AllExpenseType />} >
                    <Route exact path="expensetype" element={<ExpenseType />} />
                </Route>

                {/* Expense  */}
                <Route exact path="/" element={<AllExpense />} >
                    <Route exact path="expense" element={<Expense />} />
                </Route>

            </Routes>
        </ProviderState>
    )
}

export default MainRoutes;
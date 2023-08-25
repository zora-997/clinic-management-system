import { Routes, Route, Navigate, useHistory, useLocation, useNavigate } from "react-router-dom";
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
import AllReport from "./components/report/allReport/AllReport";
import Report from "./components/report/Report";

import Appointment from "./components/appointment/Appointment";
import AllApointment from "./components/appointment/allAppointment/AllApointment";
import PrivateRoute from "./page/home/PrivateRoute";

import AllSickDetail from "./components/sickDetail/allSickDetail/AllSickDetail";
import SickDetail from "./components/sickDetail/SickDetail";

import Header from "./components/layout/header/Header";
import { User } from "./components/users/User";






//import Main from "./page/home/main/Main";

const MainRoutes = ({ showSildBar, setShowSildBar }) => {

    const location = useLocation()

    return (

        <ProviderState>
            {/** am header lera bo awa danrwa chunka useState haia ba nawi query la global nasanuta boya abe la naw <ProviderState> be bo away la naw hamu page kan darkawe */}
            {location.pathname !== "/login" && <Header showSildBar={showSildBar} setShowSildBar={setShowSildBar} />}
            <Routes>
                {/* page route */}
                {/* PrivateRoute ama bo awaya kasaka login nakrdbe natwane bcheta naw hich bashekawa  */}
                <Route exact element={<PrivateRoute />} >

                    <Route exact path="main" element={<Dashbord />} />

                    {/* Doctor */}
                    <Route exact path="doctor" element={<Doctors />} />

                    {/* sick */}
                    <Route exact path="patient" element={<Sick />} />

                    {/* surgery route */}
                    <Route exact path="workingtype" element={<SurgeryType />} />

                    {/* detail route */}
                    <Route exact path="detail" element={<Detail />} />

                    {/* Expense type */}
                    <Route exact path="expensetype" element={<ExpenseType />} />

                    {/* Expense  */}
                    <Route exact path="expense" element={<Expense />} />

                    {/* Report  */}
                    <Route exact path="report" element={<Report />} />

                    {/* appointment  */}
                    <Route exact path="appointment" element={<Appointment />} />

                    {/* sick detal  */}
                    <Route exact path="sickdetail" element={<SickDetail />} />

                    {/* user  */}
                    <Route exact path="user" element={<User />} />



                    {/** aw index bo awa katek to  login krdwa la naw dashbordy ballam pathy dashbordaka asritawa aw index ai garenetawa bo dashbord wa dway awa path dashbord daney u bangi componenty dashbord akay */}
                    <Route index element={<Navigate to="main" />} />
                    <Route exact path="main" element={<Dashbord />} />
                    <Route exact path="/*" element={<Navigate to="main" />} />


                </Route>

                <Route exact path="/" element={<Navigate replace to="login" />} />
                <Route exact path="login" element={<Login />} />



            </Routes>
        </ProviderState>

    )
}

export default MainRoutes;
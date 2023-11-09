import React, { useContext, useState } from "react";
import GlobalContext from "../../contexts/createContext/context";
import ReportDoctor from "./ReportDoctor";
import { HiOutlineAnnotation } from "react-icons/hi";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { BsPersonDown, BsPersonVcard } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { SiExpensify } from "react-icons/si";
import { IoCodeWorkingOutline } from "react-icons/io5";
import ReportExpense from "./ReportExpense";
import ReportWorkingType from "./ReportWorkingType";
import ReportMain from "./ReportMain";
import ReportDoctorGivienLoan from "./ReportDoctorGivienLoan";
import ReportDoctorRemainLoan from "./ReportDoctorRemainLoan";
import ReportDoctorWorking from "./ReportDoctorWorking";

const ReportAll = ({
  from,
  to,
  doctor_id,
  expense_type_id,
  working_type_id,
  setErorFrom,
  setErorTo,
  setErorDoctorid,
}) => {
  const [showDoctor, setShowDoctor] = useState(false);
  const [showExpense, setShowExpense] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showWorkingType, setShowWorkingType] = useState(false);
  const [givenLoan, setGivenLoan] = useState(false);
  const [remainLoan, setRemainLoan] = useState(false);
  const [doctorWorkng, setDoctorWorking] = useState(false);

  const {
    mainReportList,
    doctorlegerList,
    expenseReportList,
    fetchExpensereportReport,
    fetchDoctorlegerReport,
    fetchReport,
    fetchWorkingTypeReportReport,
    fetchDoctorGivienLoan,
    fetchDoctorRemainLoan,
    fetchDoctorWorking,
    workingTypeReportList,
    doctorGivienLoanList,
    doctorRemainLoanList,
    doctorWorkingList,
    sickList,
  } = useContext(GlobalContext);

  // doctor report
  const doctorReport = (e) => {
    e.preventDefault();
    if (doctor_id && from && to) {
      fetchDoctorlegerReport({ from, to, doctor_id });
      setShowDoctor(true);
      setShowExpense(false);
      setShowMain(false);
      setShowWorkingType(false);
      setGivenLoan(false);
      setRemainLoan(false);
      setDoctorWorking(false);
    } else if (!from) {
      setErorFrom(true);
    } else if (!to) {
      setErorTo(true);
    } else if (!doctor_id) {
      setErorDoctorid(true);
    }
  };
  // doctor working
  const doctorWorking = (e) => {
    e.preventDefault();
    if (doctor_id && from && to) {
      fetchDoctorWorking({ from, to, doctor_id });
      setDoctorWorking(true);
      setShowDoctor(false);
      setShowExpense(false);
      setShowMain(false);
      setShowWorkingType(false);
      setGivenLoan(false);
      setRemainLoan(false);
    } else if (!from) {
      setErorFrom(true);
    } else if (!to) {
      setErorTo(true);
    } else if (!doctor_id) {
      setErorDoctorid(true);
    }
  };

  // remind doctor loan
  const remainDoctorLoan = (e) => {
    e.preventDefault();
    if (doctor_id) {
      fetchDoctorRemainLoan({ doctor_id });
      setRemainLoan(true);
      setShowDoctor(false);
      setShowExpense(false);
      setShowMain(false);
      setShowWorkingType(false);
      setGivenLoan(false);
      setDoctorWorking(false);
    } else if (!doctor_id) {
      setErorDoctorid(true);
    }
  };

  // doctor Given Loan report
  const doctorGivenLoan = (e) => {
    e.preventDefault();
    if (doctor_id && from && to) {
      fetchDoctorGivienLoan({ from, to, doctor_id });
      setGivenLoan(true);
      setShowDoctor(false);
      setShowExpense(false);
      setShowMain(false);
      setShowWorkingType(false);
      setRemainLoan(false);
      setDoctorWorking(false);
    } else if (!from) {
      setErorFrom(true);
    } else if (!to) {
      setErorTo(true);
    } else if (!doctor_id) {
      setErorDoctorid(true);
    }
  };

  // expense report
  const expenseReport = (e) => {
    e.preventDefault();
    if (from && to) {
      fetchExpensereportReport({
        from,
        to,
        expense_type_id,
      });
      setShowExpense(true);
      setShowDoctor(false);
      setShowMain(false);
      setShowWorkingType(false);
      setGivenLoan(false);
      setRemainLoan(false);
      setDoctorWorking(false);
    } else if (!from) {
      setErorFrom(true);
    } else if (!to) {
      setErorTo(true);
    }
  };

  // main report
  const mainReport = (e) => {
    e.preventDefault();
    if (from && to) {
      fetchReport({ from, to });
      setShowMain(true);
      setShowExpense(false);
      setShowDoctor(false);
      setShowWorkingType(false);
      setGivenLoan(false);
      setRemainLoan(false);
      setDoctorWorking(false);
    } else if (!from) {
      setErorFrom(true);
    } else if (!to) {
      setErorTo(true);
    }
  };

  // working type report
  const workingTypeReport = (e) => {
    e.preventDefault();
    if (from && to) {
      fetchWorkingTypeReportReport({ from, to, working_type_id });
      setShowWorkingType(true);
      setShowMain(false);
      setShowExpense(false);
      setShowDoctor(false);
      setGivenLoan(false);
      setRemainLoan(false);
      setDoctorWorking(false);
    } else if (!from) {
      setErorFrom(true);
    } else if (!to) {
      setErorTo(true);
    }
  };

  const reportData = [
    {
      id: 1,
      action: doctorReport,
      style: "border-green-300",
      icon: (
        <MdAttachMoney className="w-10 h-10 group-hover:text-green-400 duration-300 text-green-500 " />
      ),
      name: "Doctor Report",
      requier: "(Doctor , From , To)",
    },
    {
      id: 2,
      action: expenseReport,
      style: "border-purple-300",
      icon: (
        <SiExpensify className="w-10 h-10 group-hover:text-purple-400 duration-300 text-purple-500 " />
      ),
      name: "Expense Report",
      requier: "(Expense Type , From , To)",
    },
    {
      id: 3,
      action: workingTypeReport,
      style: "border-orange-300",
      icon: (
        <HiOutlineAnnotation className="w-10 h-10 group-hover:text-orange-400 duration-300 text-orange-500 " />
      ),
      name: "Working Report",
      requier: "(Working Type , From , To)",
    },
    {
      id: 4,
      action: mainReport,
      style: "border-cyan-300",
      icon: (
        <AiOutlineMoneyCollect className="w-10 h-10  group-hover:text-cyan-400 duration-300 text-cyan-500 " />
      ),
      name: "Main Report",
      requier: "(From , To)",
    },
    {
      id: 5,
      action: doctorGivenLoan,
      style: "border-pink-500",
      icon: (
        <BsPersonDown className="w-10 h-10  group-hover:text-pink-400 duration-300 text-pink-500 " />
      ),
      name: "Doctor Givinen Loan",
      requier: "(Doctor , From , To)",
    },
    {
      id: 6,
      action: remainDoctorLoan,
      style: "border-yellow-400",
      icon: (
        <BsPersonVcard className="w-10 h-10  group-hover:text-yellow-400 duration-300 text-yellow-500 " />
      ),
      name: "Doctor Remain Loan",
      requier: "(Doctor)",
    },
    {
      id: 7,
      action: doctorWorking,
      style: "border-lime-400",
      icon: (
        <IoCodeWorkingOutline className="w-10 h-10  group-hover:text-lime-400 duration-300 text-lime-500 " />
      ),
      name: "Doctor Working",
      requier: "(Doctor , From , To)",
    },
  ];

  return (
    <div className="mt-4 ">
      <div className="grid gap-y-5 gap-x-5  sm:grid-cols-2 md:grid-cols-4 px-5 bg-white rounded-md py-8">
        {reportData.map((report) => {
          return (
            <div
              key={report.id}
              onClick={(e) => report.action(e)}
              className={`relative  w-full h-full cursor-pointer p-3 overflow-hidden bg-white group   border duration-300  ${report.style}  rounded-lg shadow `}
            >
              <div className="grid h-full">
                <div>{report.icon}</div>
                <h5 className="my-3 text-xl font-semibold tracking-tight text-gray-900 ">
                  {report.name}
                </h5>
                <p className=" font-body text-sm text-gray-500 ">
                  {report.requier}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {showDoctor && (
        <ReportDoctor
          showDoctor={showDoctor}
          setShowDoctor={setShowDoctor}
          doctorlegerList={doctorlegerList}
        />
      )}
      {showExpense && (
        <ReportExpense
          showExpense={showExpense}
          expenseReportList={expenseReportList}
        />
      )}
      {showMain && (
        <ReportMain showMain={showMain} mainReportList={mainReportList} />
      )}
      {showWorkingType && (
        <ReportWorkingType
          showWorkingType={showWorkingType}
          workingTypeReportList={workingTypeReportList}
        />
      )}
      {givenLoan && (
        <ReportDoctorGivienLoan
          givenLoan={givenLoan}
          doctorGivienLoanList={doctorGivienLoanList}
        />
      )}
      {remainLoan && (
        <ReportDoctorRemainLoan
          remainLoan={remainLoan}
          doctorRemainLoanList={doctorRemainLoanList}
        />
      )}
      {doctorWorkng && (
        <ReportDoctorWorking
          doctorWorkng={doctorWorkng}
          doctorWorkingList={doctorWorkingList}
        />
      )}
    </div>
  );
};

export default ReportAll;

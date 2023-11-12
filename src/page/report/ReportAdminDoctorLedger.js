import React from "react";

const ReportAdminDoctorLedger = ({
  adminDoctorLedger,
  adminDoctorLedgerList,
}) => {
  if (!adminDoctorLedger) return null;

  return (
    <div className="mt-4">
      <div className="w-full bg-white p-5 rounded-md">
        <h1 className=" text-2xl border-b-2  mb-2 ">
          Admin Doctor Ledger Report
        </h1>
        <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
          <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 "></thead>
          <tbody>
            <tr className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="col" className="bg-cyan-500 text-white px-6 py-3">
                Initial Loan
              </th>
              {/* btawe fariza darkawe => parseFloat(adminDoctorLedgerList.total_income).toLocaleString() */}
              <td className="px-6 py-4">{adminDoctorLedgerList.init_loan}</td>
            </tr>
            <tr className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="col" className="bg-cyan-500 text-white px-6 py-3">
                Total Work
              </th>
              {/* btawe fariza darkawe => parseFloat(adminDoctorLedgerList.total_income).toLocaleString() */}
              <td className="px-6 py-4">{adminDoctorLedgerList.total_work}</td>
            </tr>
            <tr className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="col" className="bg-cyan-500 text-white px-6 py-3">
                Total Loan
              </th>
              {/* btawe fariza darkawe => parseFloat(adminDoctorLedgerList.total_expense).toLocaleString() */}
              <td className="px-6 py-4">{adminDoctorLedgerList.total_loan}</td>
            </tr>
            <tr className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="col" className="bg-cyan-500 text-white px-6 py-3">
                Total Cash
              </th>
              {/* btawe fariza darkawe => parseFloat(adminDoctorLedgerList.summary).toLocaleString() */}
              <td className="px-6 py-4">{adminDoctorLedgerList.total_cash}</td>
              {/* parseFloat(data[body]) && body.slice(body.length - 2) !== "te" ? parseFloat(data[body]).toLocaleString() : data[body] */}
            </tr>
            <tr className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="col" className="bg-cyan-500 text-white px-6 py-3">
                Total Givin Loan
              </th>
              {/* btawe fariza darkawe => parseFloat(adminDoctorLedgerList.summary).toLocaleString() */}
              <td className="px-6 py-4">
                {adminDoctorLedgerList.total_givin_loan}
              </td>
              {/* parseFloat(data[body]) && body.slice(body.length - 2) !== "te" ? parseFloat(data[body]).toLocaleString() : data[body] */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportAdminDoctorLedger;

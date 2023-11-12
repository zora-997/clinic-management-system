import React from "react";

const ReportDoctorSickLedger = ({ doctorSickLedger, doctorSickLedgerList }) => {
  if (!doctorSickLedger) return null;
  return (
    <div className="mt-4">
      <div className="w-full bg-white p-5 rounded-md">
        <h1 className=" text-2xl border-b-2  mb-2 ">
          Doctor Patient Ledger Report
        </h1>
        <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
          <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 "></thead>
          <tbody>
            <tr className="border text-lg cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="col" className="bg-cyan-500 text-white px-6 py-4 ">
                Inital Loan
              </th>
              {/* btawe fariza darkawe => parseFloat(mainReportList.total_income).toLocaleString() */}
              <td className="px-6 py-4 font-semibold ">
                {doctorSickLedgerList.init_loan}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportDoctorSickLedger;

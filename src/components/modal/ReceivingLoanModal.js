import React from "react";

const ReceivingLoanModal = ({ show, setShow, loanList }) => {
  if (!show) return null;
  return (
    <div
      onClick={() => setShow(false)}
      className=" fixed  z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-4 w-3/4 overflow-x-auto">
        <div className=" h-[600px] overflow-y-auto bg-white  p-5 rounded-md">
          <h1 className=" text-2xl border-b-2  mb-2 ">Submition Loan</h1>
          <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
            <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  Patient name
                </th>
                <th scope="col" className="px-6 py-3 ">
                  phone
                </th>
                <th scope="col" className="px-6 py-3 ">
                  amount
                </th>
                <th scope="col" className="px-6 py-3">
                  date
                </th>
                <th scope="col" className="px-6 py-3 ">
                  note
                </th>
              </tr>
            </thead>
            <tbody>
              {loanList &&
                loanList.map((loan, index) => {
                  return (
                    <tr
                      key={index}
                      className="border   select-none hover:bg-sky-100 border-cyan-200  duration-300  "
                    >
                      <td className="px-5 py-4">{loan.sick_name}</td>
                      <td className="px-5 py-4">{loan.sick_phone}</td>
                      <td className="px-5 py-4">{loan.loan_to_cash_amount}</td>
                      <td className="px-5 py-4">{loan.loan_to_cash_date}</td>
                      <td className="px-6 py-4">{loan.loan_to_cash_note}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReceivingLoanModal;

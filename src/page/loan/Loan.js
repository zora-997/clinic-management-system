import React, { useContext, useState } from "react";
import ButtonAdd from "../../components/ui/button/ButtonAdd";
import { useLocation } from "react-router-dom";
import GlobalContext from "../../contexts/createContext/context";
import AddRemainedLoanModal from "../../components/modal/AddRemainedLoanModal";
import ReceivingLoanModal from "../../components/modal/ReceivingLoanModal";
import sx from "../../assets/image/sx.jpg";

const Loan = () => {
  const { loanList, fetchLoan, sickSurgery, surgeryType, sickList } =
    useContext(GlobalContext);

  // bo war grtnaway admin_id
  const getIdAdmin = localStorage.getItem("data");
  let admin_id = JSON.parse(getIdAdmin).token;

  // bo war grtnaway sick_id
  const location = useLocation();
  let sick_id = location.state.sick_id;

  // dar henani nawi work type
  const sid = surgeryType && surgeryType.map((s) => s.surgery_type_id);
  const sn = surgeryType && surgeryType.map((s) => s.surgery_type_name);

  const [addshow, setAddShow] = useState(false);
  const [recevingShow, setRecevingShow] = useState(false);

  const recevingLoanHandel = () => {
    console.log("recevingLoanHandel");
    fetchLoan({ sick_id, admin_id });
  };

  return (
    <div className="Loan mt-10 flex justify-between w-full ">
      <AddRemainedLoanModal
        isAddVisible={addshow}
        onClose={setAddShow}
        admin_id={admin_id}
        sick_id={sick_id}
        fetchLoan={fetchLoan}
      />
      <ReceivingLoanModal
        show={recevingShow}
        setShow={setRecevingShow}
        loanList={loanList}
      />
      <div className="w-full mx-3  ">
        <div className=" w-full">
          {sickSurgery &&
            sickSurgery.map((surgery, index) => {
              return (
                <div key={index}>
                  {surgery.sick_id === sick_id ? (
                    <div className="w-full  rounded bg-white p-2 mb-3 shadow">
                      {surgery.sick_visit &&
                        surgery.sick_visit.map((visit, index) => {
                          return (
                            <ul
                              key={index + 1}
                              className="pl-1 text-center grid grid-cols-4 gap-x-3 w-full   "
                            >
                              <li>
                                {sn[sid.indexOf(`${visit.surgery_type_id}`)]}
                              </li>
                              <li>{surgery.sick_surgery_date}</li>
                              <li>{surgery.sick_surgery_type}</li>
                              <li>{visit.surgery_type_price}</li>
                            </ul>
                          );
                        })}
                    </div>
                  ) : null}
                </div>
              );
            })}
        </div>
      </div>

      {/* section right */}
      <div className="w-1/4 mr-3">
        {sickList &&
          sickList.map((sick, index) => {
            return (
              <div key={index}>
                {sick.sick_id === sick_id && (
                  <div className=" flex flex-col gap-3  rounded ">
                    <div className="bg-white relative   flex flex-col h-44 justify-center items-center rounded-md shadow ">
                      <img
                        src={sx}
                        alt="sx"
                        className="w-full object-cover rounded-md h-full "
                      />
                      <div className="absolute bottom-[3%] left-[3%]">
                        <h3 className="text-gray-500">Total price visit</h3>
                        <p className="text-lg font-semibold">
                          {sick.total_visit_price}
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        setAddShow(true);
                        console.log("press");
                      }}
                      className="border border-purple-400 shadow-md shadow-purple-300  relative w-full flex flex-col h-44 justify-center items-center rounded-md  cursor-pointer "
                    >
                      <img
                        src={sx}
                        alt="sx"
                        className="w-full object-cover rounded-md h-full "
                      />
                      <div className="absolute bottom-[3%] left-[3%]">
                        <h3 className="text-gray-500  mt-3">Remained Loan</h3>
                        <p className="text-lg font-semibold">
                          {sick.remained_debt}
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        setRecevingShow(true);
                        recevingLoanHandel();
                      }}
                      className="bg-white shadow-md border w-full flex flex-col h-44 justify-center items-center rounded  cursor-pointer "
                    >
                      <p className="text-gray-500">Receiving a Loan</p>
                      <p className="text-lg font-semibold">
                        {sick.submition_debt}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Loan;

//   /* loan input */

//  <div className='grid gap-5 mx-3 mt-10'>
//  <form onSubmit={(e) => loanHandler(e)} className='grid md:grid-cols-4 gap-5 w-full bg-white p-5 rounded-md'>
//  <div>
//      <label className='text-black  2xl:text-xl'>Loan Amount</label>
//      <input
//          type="number"
//          required
//          onChange={(e) => setLoan(e.target.value)}
//          // value={from}
//          placeholder='0.00'
//          className={`bg-white placeholder-gray-400 focus:ring-1 focus:outline-none  border pl-2 p-1.5 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`} />
//  </div>
//  <div>
//      <label className='text-black 2xl:text-xl'>Loan Date</label>
//      <input
//          type="date"
//          required
//          onChange={(e) => setDate(e.target.value)}
//          // value={from}
//          className={`bg-white ${loan_to_cash_date ? 'text-gray-600' : 'text-gray-400'}  focus:ring-1 focus:outline-none  border pl-2 p-1.5 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`} />
//  </div>
//  <div>
//      <label className='text-black 2xl:text-xl'>Loan Note</label>
//      <input
//          type="text"
//          placeholder='Note'
//          onChange={(e) => setNote(e.target.value)}
//          // value={from}
//          className={`bg-white ${loan_to_cash_note ? 'text-gray-600' : 'text-gray-400'}  focus:ring-1 focus:outline-none  border pl-2 p-1.5 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`} />
//  </div>
//  <div className='place-self-end w-full'>
//      <ButtonAdd add="Add Loan" />
//  </div>
// </form>
// </div>

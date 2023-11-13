import React, { useContext, useState } from "react";
import ButtonAdd from "../../components/ui/button/ButtonAdd";
import { useLocation } from "react-router-dom";
import GlobalContext from "../../contexts/createContext/context";
import AddRemainedLoanModal from "../../components/modal/AddRemainedLoanModal";
import ReceivingLoanModal from "../../components/modal/ReceivingLoanModal";
import sx from "../../assets/image/sx.jpg";
import cost1 from "../../assets/image/cost1.png";
import remained from "../../assets/image/remained.png";
import submition from "../../assets/image/submition.png";

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
    <div className="Loan mt-10 flex flex-col  mx-3 ">
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

      {/* section right */}
      <div className="w-full ">
        {sickList &&
          sickList.map((sick, index) => {
            return (
              <div key={index}>
                {sick.sick_id === sick_id && (
                  <div className="  mb-4 flex gap-3  rounded ">
                    <div className="bg-white border border-[#51E7B7] hover:bg-[#DBF7ED] w-full h-32 justify-center items-center rounded-md shadow ">
                      <div className=" flex justify-around items-center ">
                        <div className="place-self-end mt-4">
                          <img src={cost1} alt="cost" className="w-20" />
                        </div>
                        <div>
                          <h3 className="text-gray-500 text-2xl ">
                            Total Patient Price
                          </h3>
                          <p className="text-2xl font-semibold">
                            {sick.total_visit_price}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        setAddShow(true);
                        console.log("press");
                      }}
                      className="bg-white border relative w-full flex flex-col h-32 justify-center items-center rounded-md  cursor-pointer "
                    >
                      <div className="bg-white border border-yellow-400 hover:bg-yellow-50 w-full h-32 justify-center items-center rounded-md shadow ">
                        <div className=" flex justify-around items-center ">
                          <div className="place-self-end mt-4">
                            <img
                              src={remained}
                              alt="remained"
                              className="w-20"
                            />
                          </div>
                          <div>
                            <h3 className="text-gray-500 text-2xl ">
                              Giving Loan
                            </h3>
                            <p className="text-2xl font-semibold">
                              {sick.remained_debt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        setRecevingShow(true);
                        recevingLoanHandel();
                      }}
                      className="bg-white border cursor-pointer border-sky-300 hover:bg-sky-50 w-full h-32 justify-center items-center rounded-md shadow "
                    >
                      <div className=" flex justify-around items-center ">
                        <div className="place-self-end mt-4">
                          <img
                            src={submition}
                            alt="remained"
                            className="w-20"
                          />
                        </div>
                        <div>
                          <h3 className="text-gray-500 text-2xl ">
                            Submition debt
                          </h3>
                          <p className="text-2xl font-semibold">
                            {sick.submition_debt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>

      <div className="  ">
        <div className="bg-white p-1 rounded">
          <h1 className=" text-2xl  border-b border-b-sky-200  w-fit ">
            History Patient
          </h1>
          <ul className="pl-1 text-center grid font-bold grid-cols-4 gap-x-3 my-6 bg-white/75 border-b border-b-sky-200 p-2">
            <li>Work Type</li>
            <li>Date</li>
            <li>Type Monye</li>
            <li>Price</li>
          </ul>
          {sickSurgery &&
            sickSurgery.map((surgery, index) => {
              return (
                <div key={index}>
                  {surgery.sick_id === sick_id ? (
                    <div className="  rounded bg-white p-2 mb-3 shadow">
                      {surgery.sick_visit &&
                        surgery.sick_visit.map((visit, index) => {
                          return (
                            <>
                              <ul
                                key={index + 1}
                                className="pl-1 text-center grid grid-cols-4 gap-x-3    "
                              >
                                <li>
                                  {sn[sid.indexOf(`${visit.surgery_type_id}`)]}
                                </li>
                                <li>{surgery.sick_surgery_date}</li>
                                <li>{surgery.sick_surgery_type}</li>
                                <li>{visit.surgery_type_price}</li>
                              </ul>
                            </>
                          );
                        })}
                    </div>
                  ) : null}
                </div>
              );
            })}
        </div>
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

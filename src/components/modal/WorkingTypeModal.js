import React, { useContext, useState } from 'react'

import GlobalContext from '../../contexts/createContext/context';
import Modal from '../ui/modal/Modal';


const WorkingTypeModal = ({ isVisible, onClose, set_surgery_type_name, surgery_type_name, set_surgery_type_price, surgery_type_price, set_sick_surgery_invoice_note, sick_surgery_invoice_note, set_sick_surgery_invoice_id, sick_surgery_invoice_id }) => {

    const { UpdateSickSurgeryInvoice } = useContext(GlobalContext)
    //console.log(sick_surgery_invoice_note);
    const [showError, set_showError] = useState(false);


    // uuid for delte surgery type in table add new work
    const update = (e) => {
        e.preventDefault();

        UpdateSickSurgeryInvoice({ surgery_type_price, sick_surgery_invoice_note, sick_surgery_invoice_id })

        set_sick_surgery_invoice_id(0)
        set_surgery_type_name('');
        set_surgery_type_price('');
        set_sick_surgery_invoice_note('');
        onClose(false)


    }



    if (!isVisible) return null;
    return (
        <Modal>
            <div className='flex flex-col  justify-center items-center w-5/6'>
                <button className='text-gray-700  place-self-end text-xl    ' onClick={() => onClose(false)}> X </button>
                <div className={` flex flex-col p-5  w-full bg-white h-[400px] rounded-md  `}>


                    <form onSubmit={update} >

                        <div className="mt-5 flex justify-between">
                            <div className='relative w-[30%]'>
                                <div className='flex flex-col w-full border-b rounded-md  absolute'>
                                    <label className='text-gray-700 mb-2'>Working Type</label>
                                    <input type="text" required name='surgery_type_name' placeholder='Working Type Search' value={surgery_type_name || ''}
                                        //  onChange={(e) => set_surgery_type_name(e.target.value)}
                                        autoComplete="off"
                                        disabled
                                        onFocus={() => set_showError(false)}
                                        className={` bg-slate-50 ${showError && ' border border-red-400 bg-red-50'}  w-full  text-sm focus:ring-1 focus:ring-sky-500 pl-2 focus:outline-none border border-gray-300 p-2 rounded shadow-sm shadow-black/10 `} />



                                </div>
                            </div>

                            {/** price input */}
                            <div className='flex flex-col w-[30%]'>
                                <label className='text-gray-700 mb-1'>Price</label>
                                {/** value = {surgery_type_price || ''} aw or agar da naney awa alle auncontrolled wata ama sarata null yan undefined boia aw || bo da aney ka te batallish be */}
                                <input type="number" name='surgery_type_price' required placeholder='0.00' value={surgery_type_price || ''}
                                    onChange={(e) => set_surgery_type_price(e.target.value)}
                                    className={`focus:ring-1 ${surgery_type_price ? 'bg-sky-100 ' : 'bg-slate-50 '} focus:outline-none border pl-2 p-2 w-full  rounded shadow-sm shadow-black/10`} />
                            </div>

                            {/** button  Add New Work*/}
                            <div className='flex pt-7 '>
                                <button
                                    type='submit'

                                    disabled={surgery_type_price ? false : true}
                                    className={` ${surgery_type_price ? 'bg-green-500 hover:bg-green-400' : 'bg-green-200'} w-32  shadow-sm  shadow-gray-300 border text-white border-green-300  p-1.5  rounded-md  `} >
                                    Upadte
                                </button>
                            </div>
                        </div>

                        {/** description input*/}
                        <div className='flex flex-col w-full mt-9 '>
                            <label className='text-gray-700 mb-1'>Description</label>
                            <textarea placeholder='Description' cols="50" rows="6"
                                value={sick_surgery_invoice_note || ''}
                                onChange={(e) => set_sick_surgery_invoice_note(e.target.value)}
                                className={` ${sick_surgery_invoice_note ? 'bg-sky-100' : 'bg-slate-50 '} focus:ring-1 focus:outline-none border p-3 flex-wrap rounded-md shadow-sm shadow-black/10`} >
                            </textarea>
                        </div>



                    </form>


                </div>
            </div>

        </Modal>
    )
}

export default WorkingTypeModal
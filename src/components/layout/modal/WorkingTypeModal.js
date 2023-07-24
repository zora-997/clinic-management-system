import React, { useState } from 'react'
import { VscAdd } from 'react-icons/vsc';
import uuid from 'react-uuid';

const WorkingTypeModal = ({ isVisible, onClose, set_surgery_type_name, surgery_type_name, set_surgery_type_price, surgery_type_price, set_sick_surgery_invoice_note, sick_surgery_invoice_note, set_surgery_type_id, surgery_type_id }) => {

    //console.log(sick_surgery_invoice_note);
    const [showError, set_showError] = useState(false);
    const [sick_surgery, setsicksurgerys] = useState([]);

    // uuid for delte surgery type in table add new work
    const newWork = (e) => {
        e.preventDefault();
        // if (surgery_type_id == 0) {
        //     // bo error border bakarde la inputy working type
        //     set_showError(true)

        // } else {
        setsicksurgerys([...sick_surgery, { sick_surgery_id: uuid(), surgery_type_id, surgery_type_price, sick_surgery_invoice_note }]);
        // }

        set_surgery_type_id(0);
        set_surgery_type_name('');
        set_surgery_type_price('');
        set_sick_surgery_invoice_note('');
    }

    if (!isVisible) return null;
    return (
        <div className='fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className={` flex flex-col justify-between  w-5/6 bg-white h-[420px] rounded-md  `}>
                <div className={` place-self-center p-6 w-full flex flex-col overflow-y-auto `}>
                    <button className='text-red-400  text-xl place-self-end mt-3 mr-3 ' onClick={() => onClose(false)}> X </button>

                    <form onSubmit={newWork} >

                        <div className="mt-8 flex justify-between">
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
                                    //  onClick={() => { surgery_type_id && set_show(true) }}
                                    className={` hover:text-white shadow-sm flex items-center shadow-gray-300 border text-sky-400 border-sky-300 h-fit p-1.5 px-3 rounded-md hover:bg-sky-300`}>
                                    <VscAdd className='mr-1' /> New Work
                                </button>
                            </div>
                        </div>

                        {/** description input*/}
                        <div className='flex flex-col w-full mt-9 '>
                            <label className='text-gray-700 mb-1'>Description</label>
                            <textarea placeholder='Description' cols="50" rows="4"
                                value={sick_surgery_invoice_note || ''}
                                onChange={(e) => set_sick_surgery_invoice_note(e.target.value)}
                                className={` ${sick_surgery_invoice_note ? 'bg-sky-100' : 'bg-slate-50 '} focus:ring-1 focus:outline-none border p-3 flex-wrap rounded-md shadow-sm shadow-black/10`} >
                            </textarea>
                        </div>



                    </form>

                </div>
            </div>
        </div>
    )
}

export default WorkingTypeModal
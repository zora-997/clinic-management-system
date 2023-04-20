import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import GlobalContext from "../../components/contexts/createContext/context";
import DetailBodyBox from './DetailBodyBox';
import DetailTypeOfWork from './alldetail/DetailTypeOfWork';
import uuid from "react-uuid";




const DetailBodyInput = () => {

    const { id } = useParams();
    const { surgeryType, addSickSurgery, doctor_id } = useContext(GlobalContext)

    const [surgery_type_id, set_surgery_type_id] = useState("")
    const [surgery_type_name, set_surgery_type_name] = useState("")
    const [surgery_type_price, set_surgery_type_price] = useState()
    const [sick_surgery_invoice_note, set_sick_surgery_invoice_note] = useState("");
    const [show, set_show] = useState(false);


    let sick_surgery_date = (new Date().toISOString().slice(0, 10));

    // bor war grtni nawi surgery type ba pey surgery_type_id
    const sid = surgeryType.map((d) => d.surgery_type_id)
    const sn = surgeryType.map((d) => d.surgery_type_name)


    // TEMP 
    const [sick_surgery, setsicksurgerys] = useState([]);

    const onSearch = (search, id) => {
        set_surgery_type_name(search)
        surgeryType.map((item) => {
            if (item.surgery_type_id === id) {
                set_surgery_type_price(item.surgery_type_price)
            } return null;
        })
    }

    // uuid for delte surgery type in table add new work
    const onClick = (e) => {
        e.preventDefault();
        setsicksurgerys([...sick_surgery, { sick_surgery_id: uuid(), surgery_type_id, surgery_type_price, sick_surgery_invoice_note }]);

        set_surgery_type_name('');
        set_surgery_type_price('');
        set_sick_surgery_invoice_note('');
    }


    const clickAddWork = (e) => {
        e.preventDefault();
        addSickSurgery({
            doctor_id,
            sick_id: id,
            sick_surgery_date,
            items: sick_surgery
        })
        set_show(false)
    }


    return (
        <div>

            <form onSubmit={onClick} className='' >

                <div className="mt-8 flex justify-between">
                    <div className='relative w-[30%]'>
                        <div className='flex flex-col w-full border-b rounded-md  absolute'>
                            <label className='text-gray-600 mb-2'>Surgery Type</label>
                            <input type="text" required name='surgery_type_name' placeholder='Surgery Search' value={surgery_type_name}
                                onChange={(e) => set_surgery_type_name(e.target.value)}
                                autoComplete="off"
                                className={` ${surgery_type_name && 'bg-sky-50'} w-full bg-slate-50 text-sm focus:ring-1 focus:ring-sky-500 pl-2 focus:outline-none border border-gray-300 p-2 rounded shadow-sm shadow-black/10 `} />

                            {surgeryType.filter(itme => {
                                const search = surgery_type_name.toLowerCase();
                                const surgeryName = itme.surgery_type_name.toLowerCase();
                                return search && surgeryName.startsWith(search) && surgeryName !== search
                            })
                                // limit aka tanha 3 dana law naaway search bo aaki pshani ada
                                .slice(0, 3)
                                .map((itme) => {
                                    return <ul key={itme.surgery_type_id} className='cursor-pointer bg-white hover:bg-sky-500  hover:text-white'
                                        onClick={() => { onSearch(itme.surgery_type_name, itme.surgery_type_id); set_surgery_type_id(itme.surgery_type_id) }} >
                                        <li className='border-r border-l pl-2'>{itme.surgery_type_name}</li>
                                    </ul>
                                })}
                        </div>
                    </div>

                    {/** price input */}
                    <div className='flex flex-col w-[30%]'>
                        <label className='text-gray-600 mb-1'>Price</label>
                        <input type="number" name='surgery_type_price' required placeholder='0.00' value={surgery_type_price}
                            onChange={(e) => set_surgery_type_price(e.target.value)}
                            className={`bg-slate-50 focus:ring-1 ${surgery_type_price && 'bg-sky-50'} focus:outline-none border pl-2 p-2 w-full  rounded shadow-sm shadow-black/10`} />
                    </div>

                    {/** button  Add New Work*/}
                    <div className='flex pt-7 '>
                        <button
                            type='submit'
                            onClick={() => { surgery_type_id && set_show(true) }}
                            className={` hover:text-white shadow-sm shadow-gray-300 border text-sky-400 border-sky-300 h-fit p-1.5 px-3 rounded-md hover:bg-sky-300`}>
                            Add New Work
                        </button>
                    </div>
                </div>

                {/** description input*/}
                <div className='flex flex-col w-[60rem] mt-2 '>
                    <label className='text-gray-600 mb-1'>Description</label>
                    <textarea placeholder='Description' cols="50" rows="4"
                        value={sick_surgery_invoice_note}
                        onChange={(e) => set_sick_surgery_invoice_note(e.target.value)}
                        className={`bg-slate-50 ${sick_surgery_invoice_note && 'bg-sky-50'} focus:ring-1 focus:outline-none border p-3 flex-wrap rounded-md shadow-sm shadow-black/10`} >
                    </textarea>
                </div>



            </form>

            {/** add new work  */}
            {
                show && sick_surgery.length > 0 ?
                    <DetailTypeOfWork sick_surgery={sick_surgery} clickAddWork={clickAddWork} set_show={set_show} setsicksurgerys={setsicksurgerys} />
                    : null

            }




        </div>
    )
}

export default DetailBodyInput
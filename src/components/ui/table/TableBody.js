import React from 'react'

const TableBody = ({ data, search, tbody, setState, change, setShow }) => {


    return (
        <tbody>
            {search(data).map((data, index) => {
                return (
                    <tr
                        key={index}
                        // setState[index] wata setNewName(), wa data[name] wata data.doctor_name hamui abe ba setNewName(data.doctor_name)..... bo awani trish har waya
                        onClick={() => { setShow(true); change && change.map((name, index) => setState[index](data[name])) }}
                        className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                        <th scope='row' className="px-5 py-4">&nbsp;&nbsp;{index + 1}</th>
                        {tbody.map((body, index) => {
                            return <td key={index} className="px-6 py-4">{data[body]}</td>
                        })}
                    </tr>
                )
            })}
        </tbody>
    )
}

export default TableBody
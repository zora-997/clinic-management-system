import React from 'react'

const ButtonDelete = ({ deleteRow, onClose }) => {

    return (
        <button
            onClick={(e) => { deleteRow(e); onClose(false); }}
            className='border rounded-md bg-red-600 hover:bg-red-500 text-white   px-8 p-1.5 my-2'>
            Delete
        </button>
    )
}

export default ButtonDelete
import React from 'react'

const ButtonAdd = ({ add }) => {
    return (
        <button type='submit'
            className='border w-full 2xl:mt-6 rounded-md bg-cyan-500 hover:bg-cyan-400
           text-white p-2 2xl:p-3 2xl:text-2xl '>
            {add}
        </button>
    )
}

export default ButtonAdd
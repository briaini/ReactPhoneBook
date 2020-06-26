import React from 'react'

const Contact = ({name, number, handleDelete}) => {
    // const label = name

    return (
        <li className='contactItem'>
            {name +"    "+ number}
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default Contact
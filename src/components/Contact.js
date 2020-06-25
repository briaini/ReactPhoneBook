import React from 'react'

const Contact = ({name, number}) => {
    // const label = name

    return (
        <li>
            {name +"    "+ number}
        </li>
    )
}

export default Contact
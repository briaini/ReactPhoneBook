import React from 'react'
import Contact from './Contact'

const RenderedContacts = ({personsList, handleDelete}) =>
    (
        <div>
            {personsList.map((person) =>
                <Contact 
                key={person.id} 
                name={person.name} 
                number={person.number} 
                handleDelete={() => handleDelete(person.id)}
                />
            )}
        </div>
    )


export default RenderedContacts
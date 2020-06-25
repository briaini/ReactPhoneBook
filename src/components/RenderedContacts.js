import React from 'react'
import Contact from './Contact'

const RenderedContacts = ({personsList}) =>
    (
        <div>
            {personsList.map((person) =>
                <Contact key={person.name} name={person.name} number={person.number} />
            )}
        </div>
    )


export default RenderedContacts
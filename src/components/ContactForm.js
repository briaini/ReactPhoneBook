import React, { useState } from 'react'
import contactService from '../services/contacts'


const ContactForm = ({ persons, setPersons }) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const addContact = (event) => {
        event.preventDefault()

        const exists = persons.some((person) => person.name === newName)

        const contactObject = {
            name: newName,
            number: newNumber
        }

        exists ? window.alert(`The name ${newName} already exists`) :
            contactService.
                create(contactObject)
                .then(returnedContact => {
                    console.log(`new ${returnedContact.id}`)
                    setPersons(persons.concat(returnedContact))
                    setNewName('')
                    setNewNumber('')
                    console.log(persons)
                })
    }

    return (
        <form onSubmit={addContact}>
            <div>
                name: <input
                    value={newName}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default ContactForm
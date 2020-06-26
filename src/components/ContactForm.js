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

        const existsIndex = persons.findIndex((person) => person.name === newName)

        const contactObject = {
            name: newName,
            number: newNumber
        }

        if (existsIndex !== -1) {
            if (persons[existsIndex].number === newNumber) {
                window.alert(`The name ${newName} already exists with identical number.`)
            } else {
                const newPerson = { ...persons[existsIndex], number: newNumber }
                if (window.confirm(`Would you like to change ${newName}'s number to ${newNumber}?`)) {
                    contactService
                        .update(newPerson.id, newPerson)
                        .then(setPersons(persons.filter(person=>person.id !== newPerson.id).concat(newPerson)))

                }

            }
        } else {
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
        // const exists = persons.some((person) => person.name === newName)

        // exists ? window.alert(`The name ${newName} already exists`) :
        //     contactService.
        //         create(contactObject)
        //         .then(returnedContact => {
        //             console.log(`new ${returnedContact.id}`)
        //             setPersons(persons.concat(returnedContact))
        //             setNewName('')
        //             setNewNumber('')
        //             console.log(persons)
        //         })
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
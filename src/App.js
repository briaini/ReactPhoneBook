import React, { useState, useEffect } from 'react'
import Contact from './components/Contact'
import contactService from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, [])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    console.log(`searching... ${event.target.value}`)
    setSearchValue(event.target.value)
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
          setPersons(persons.concat(returnedContact))
          setNewName('')
          setNewNumber('')
        })
  }

  const personsList = persons.filter(person => person.name.toUpperCase() === searchValue.toUpperCase())
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        search: <input
          value={searchValue}
          onChange={handleSearch}
        />
      </div>
      <h3>add a new contact</h3>
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
      <h2>Numbers</h2>
      {personsList.map((person) =>
        <Contact key={person.name} name={person.name} number={person.number} />
      )}
    </div>
  )
}

export default App
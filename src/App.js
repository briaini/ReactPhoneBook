import React, { useState, useEffect } from 'react'
import contactService from './services/contacts'
import Searcher from './components/Searcher'
import RenderedContacts from './components/RenderedContacts'
import ContactForm from './components/ContactForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts)
      })
  }, [])

  const handleDelete = (id) => {
    contactService.del(id)
      .then(
        setPersons(persons.filter(n => n.id !== id))
      )
  }

  const personsList = searchValue.length === 0 ? persons : persons.filter(person => person.name.toUpperCase().includes(searchValue.toUpperCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Searcher
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <h3>add a new contact</h3>

      <ContactForm
        persons={persons}
        setPersons={setPersons}
      />

      <h2>Numbers</h2>

      <RenderedContacts
        personsList={personsList}
        handleDelete={handleDelete}
      />
      <div>
        debug: {persons.map(person => person.id)}
      </div>
    </div>
  )
}

export default App
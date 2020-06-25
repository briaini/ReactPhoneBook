import React, { useState } from 'react'
import Contact from './components/Contact'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Brian Kummer', number: "0" }
  ])
  const [newName, setNewName] = useState('')

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form>
        <div>
          name: <input
            value={newName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => 
        <Contact key={i} name={person.name} number={person.number} />
      )}
    </div>
  )
}

export default App
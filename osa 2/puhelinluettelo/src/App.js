import React, { useState } from 'react'
import Numbers from './components/Numbers'
import Add from './components/Add'
import Find from './components/Find'



const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('a new name')
  const [ newNumber, setNewNumber ] = useState('a new number')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const [ filterText, setFilterText ] = useState('')
  
  const filterItems = (persons, query) => {
    return persons.filter(person => person.name.toLowerCase().includes(query.toLowerCase()))
  }

  const filter = filterItems(persons, filterText)


  const filterChange = (event) => {
    console.log(event.target.value)
    setFilterText(event.target.value)
  }

  const personObject = {
    name: newName, 
    number: newNumber
  }

  const addPerson = (event) => {
    event.preventDefault()

    if ( persons.find(({ name }) => name === newName ) ) {

      return window.alert(`${newName} is already added to phonebook`);
    } else {
      
      setPersons(persons.concat(personObject))
      setNewName('add another name')
      setNewNumber('add another number') 
      return console.log('nimi lisätty')
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Find filter = {filterText} handleFilter = {filterChange}/>
      <Add add={addPerson} number = {newNumber} new = {newName} handleName = {handleNameChange} handleNumber = {handleNumberChange}/>
      <Numbers filter = {filter}/>

    </div>
  )

}

export default App
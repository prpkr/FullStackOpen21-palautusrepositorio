import React, { useState, useEffect } from "react";

import Numbers from "./components/Numbers";
import Add from "./components/Add";
import Find from "./components/Find";
import phoneService from "./services/phone";  //axion funktiot täällä
import Notification from "./components/Notification"

const App = () => {
  const [persons, setPersons] = useState([]);

  // tarvii phone.js funktioita
  useEffect(() => {
    phoneService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const [newName, setNewName] = useState("a new name");
  const [newNumber, setNewNumber] = useState("a new number");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const [filterText, setFilterText] = useState("");

  const filterItems = (persons, query) => {
    return persons.filter((person) =>
      person.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filter = filterItems(persons, filterText);

  const filterChange = (event) => {
    console.log(event.target.value);
    setFilterText(event.target.value);
  };

  const personObject = {
    name: newName,
    number: newNumber,
  };

  // tarvii phone.js funktioita
  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find(({ name }) => name === newName);
    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        phoneService.updatePerson(updatedPerson)
          .then((returnedPerson) => {
            setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person));
            setNewName("add another name");
            setNewNumber("add another number");
            return console.log("number updated");
          });
      }
    } else {
      phoneService.sendPerson(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("add another name");
          setNewNumber("add another number");
          return console.log("name added");
        });
    }
  };

  // tarvii phone.js funktioita.
  // tämä funktio menee propsina Numbers ja Person komponentteihin
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      phoneService.deletePerson(id)
        .then(() => {
          phoneService.getAll()
            .then((updatedPersons) => {
              setPersons(updatedPersons)
            })
        })
        .catch(error => {
          setErrorMessage(`Name '${name}' was already removed from server`);
          setTimeout(() => {setErrorMessage(null);}, 5000);
          phoneService.getAll().then((updatedPersons) => {setPersons(updatedPersons)})
        });
    }
};

  const [errorMessage, setErrorMessage] = useState(null)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />

      <Find filter={filterText} handleFilter={filterChange} />
      <Add
        add={addPerson}
        number={newNumber}
        new={newName}
        handleName={handleNameChange}
        handleNumber={handleNumberChange}
      />
      <Numbers filter={filter} function={deletePerson} />
    </div>
  );
};
export default App;

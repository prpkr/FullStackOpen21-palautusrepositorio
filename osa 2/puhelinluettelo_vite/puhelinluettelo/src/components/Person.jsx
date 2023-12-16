import React from 'react'

const Person = (props) => {
  
  /*onClick funktio tuodaan App.js:sästä:

    const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      phoneService.deletePerson(id).then(() => {
        phoneService.getAll().then((updatedPersons) => {
          setPersons(updatedPersons);
        });
      });
    }
  };

  */

  return (
    <div>
      <p>{props.name}, {props.number}, <button onClick={() => props.function(props.id, props.name)}>{'delete'}</button> </p>
    </div>
  )
};

export default Person
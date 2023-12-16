import React from 'react'
import Person from './Person'


const Numbers = (props) => {
  
  return (
      <div>
            <h3>Numbers</h3>
                <div>  
                    {props.filter.map(person => <Person name = {person.name} key = {person.id} number = {person.number} id = {person.id} function = {props.function}/>)}  
                </div>
      </div>
  )
}

export default Numbers
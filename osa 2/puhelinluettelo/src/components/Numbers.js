import React from 'react'
import Person from './Person'


const Numbers = (props) => {
  
  return (
      <div>
            <h3>Numbers</h3>
                <div>  
                    {props.filter.map(person => <Person name = {person.name} key={person.name} number = {person.number}/>)}  
                </div>
      </div>
  )
}

export default Numbers
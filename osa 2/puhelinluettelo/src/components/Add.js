import React from 'react'

const Add = (props) => {
  
  return (
    <div>
      <h3>Add name</h3>
      <form onSubmit={props.add}>
      <div>
        name: <input value={props.new} onChange={props.handleName}/>
      </div>
      <div>
        number: <input value={props.number} onChange={props.handleNumber}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
  )
}

export default Add
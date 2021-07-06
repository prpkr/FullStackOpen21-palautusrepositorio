import React from 'react'

const Find = (props) => {
  
  return (
    <div>
      <h3>Filter names</h3>
      <form>
      <div>
        name: <input value={props.filter} onChange={props.handleFilter} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
  )
}

export default Find
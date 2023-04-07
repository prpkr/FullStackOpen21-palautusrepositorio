import React from 'react'

const Find = (props) => {

  


  return (
    <div>
      <label htmlFor="searchInput">Find countries:</label>
      <input
        type="text"
        id="searchInput"
        value={props.searchText}
        onChange={props.onSearchTextChange}
      />
    </div>
  );
}

export default Find;

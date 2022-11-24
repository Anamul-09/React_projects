import React from 'react';
const Search = () => {
let Term = '';
const handleChange = (event) =>{
  Term=event.target.value
}

return (
  <div className="col-sm-8">
    <h1>This is Search page</h1>
    <label>Search</label>
    <input type={"text"} onChange={handleChange}></input>
    <h1>{Term}</h1>
  </div>
  
)}



export default Search;

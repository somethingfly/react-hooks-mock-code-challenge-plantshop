import React from "react";

function Search({ onSearch, searchTerm }) {

  return (
    <form className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </form>
  );
}

/*
import React, { useState } from "react";

function Search({ onSearch }) {

  const [searchText, setSearchText] = useState("");

  return (
    <form className="searchbar" onChange={ onSearch(searchText) }>
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
*/

/*
function Search() {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}
*/

export default Search;

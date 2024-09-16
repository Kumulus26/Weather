import React from 'react';

function SearchBar() {
  return <>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher des villes"
        className="search-input"
      />
    </div>
    </>
}

export default SearchBar;
import React from 'react';

function SearchBar() {
  return <>
    <div className="search-bar">
      <input type="text" placeholder="Rechercher des villes" className="search-input"/>
      <button className="search-button">Rechercher</button>
    </div>
    </>
}

export default SearchBar;
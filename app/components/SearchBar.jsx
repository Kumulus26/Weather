import React from 'react';
import Button from 'react-bootstrap/Button';

function SearchBar() {
  return <>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher des villes"
        className="search-input"
      />
        <Button variant="Dark">GO!</Button>
    </div>
    </>
}

export default SearchBar;
import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for cities"
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
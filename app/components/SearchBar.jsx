'use client'
import React from 'react';
import { useState } from 'react';

function SearchBar({ onCitySearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCitySearch(input);
  };

  return <>
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Rechercher des villes" className="search-input"/>
        <button className="p-3 bg-teal-500 text-white rounded-r-xl hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400">Rechercher</button>
      </form>
    </div>
    </>
}

export default SearchBar;
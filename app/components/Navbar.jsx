import React from 'react';
import { HomeIcon, MapIcon, CogIcon, ViewListIcon } from '@heroicons/react/solid'; // Tu peux utiliser des icônes similaires


function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-item">
          <HomeIcon className="icon" />
          <span>Weather</span>
        </li>
        <li className="navbar-item">
          <ViewListIcon className="icon" />
          <span>Cities</span>
        </li>
        <li className="navbar-item">
          <MapIcon className="icon" />
          <span>Map</span>
        </li>
        <li className="navbar-item">
          <CogIcon className="icon" />
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
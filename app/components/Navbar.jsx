import React from 'react';
import { HomeIcon, MapIcon, CogIcon, ViewListIcon } from '@heroicons/react/solid';


function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-item">
          <HomeIcon className="icon" />
          <span>Accueil</span>
        </li>
        <li className="navbar-item">
          <ViewListIcon className="icon" />
          <span>Villes</span>
        </li>
        <li className="navbar-item">
          <MapIcon className="icon" />
          <span>Carte</span>
        </li>
        <li className="navbar-item">
          <CogIcon className="icon" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
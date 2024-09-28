import React from 'react';
import { HomeIcon, MapIcon, CogIcon, ViewListIcon } from '@heroicons/react/solid';


function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="navbar-item">
          <HomeIcon className="icon" />
          <p>Accueil</p>
        </li>
        <li className="navbar-item">
          <ViewListIcon className="icon" />
          <p>Villes</p>
        </li>
        <li className="navbar-item">
          <MapIcon className="icon" />
          <p>Carte</p>
        </li>
        <li className="navbar-item">
          <CogIcon className="icon" />
          <p>Settings</p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
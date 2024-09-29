import React, { useState } from 'react';
import { HomeIcon, MapIcon, CogIcon, ViewListIcon } from '@heroicons/react/solid';
import { ListGroup, Button } from 'react-bootstrap';

function Navbar({ onSelectCity }) {
  const [showCities, setShowCities] = useState(false);

  const toggleCities = () => {
    setShowCities(!showCities);
  };

  const handleCityClick = (city) => {
    onSelectCity(city);
    setShowCities(false);
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="navbar-item">
            <Button variant="outline-light">
              <HomeIcon className="icon" />
              <p>Accueil</p>
            </Button>
          </li>
          <li className="navbar-item">
            <Button variant="outline-light" onClick={toggleCities}>
              <ViewListIcon className="icon" />
              <p>Villes</p>
            </Button>
          </li>
          <li className="navbar-item">
              <Button variant="outline-light">
                <MapIcon className="icon" />
                <p>Carte</p>
              </Button>
          </li>
          <li className="navbar-item">
            <Button variant="outline-light">
              <CogIcon className="icon" />
              <p>Settings</p>
            </Button>
          </li>
        </ul>
      </nav>

      {showCities && (
        <div
          className="city-list-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fond semi-transparent
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'fadeIn 0.5s ease-in-out',
          }}
        >
          <div
            className="city-list-container"
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
              width: '400px',
              maxWidth: '80vw',
              maxHeight: '80vh',
              overflowY: 'auto', // Permet de scroller si la liste est longue
              animation: 'slideDown 0.5s ease-in-out',
            }}
          >
            <h4 className="text-center mb-4">Sélectionnez une ville</h4>
            <ListGroup>
              {['Paris', 'Marseille', 'Lyon', 'Bordeaux', 'Nice'].map((city) => (
                <ListGroup.Item
                  key={city}
                  action
                  onClick={() => handleCityClick(city)}  // Sélectionner une ville
                  className="text-center"
                >
                  {city}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
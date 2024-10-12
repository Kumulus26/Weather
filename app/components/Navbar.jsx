import React, { useState, useRef, useEffect } from 'react';
import { HomeIcon, MapIcon, CogIcon, ViewListIcon } from '@heroicons/react/solid';
import { ListGroup, Button } from 'react-bootstrap';

function Navbar({ onSelectCity }) {
  const [showCities, setShowCities] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const cityListRef = useRef(null);

  const toggleCities = () => {
    setShowCities(!showCities);
  };

  const handleCityClick = (city) => {
    onSelectCity(city);
    setShowCities(false);
  };

  const handleClickOutside = (event) => {
    if (cityListRef.current && !cityListRef.current.contains(event.target)) {
      setShowCities(false);
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);

    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (showCities) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCities]);

  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="navbar-item">
            <Button variant="outline-light" className="navbar-button">
              <HomeIcon className="icon" />
              <p>Accueil</p>
            </Button>
          </li>
          <li className="navbar-item">
            <Button variant="outline-light" onClick={toggleCities} className="navbar-button">
              <ViewListIcon className="icon" />
              <p>Villes</p>
            </Button>
          </li>
          <li className="navbar-item">
            <Button variant="outline-light" className="navbar-button">
              <MapIcon className="icon" />
              <p>Carte</p>
            </Button>
          </li>
          <li className="navbar-item">
            <Button variant="outline-light" className="navbar-button" onClick={toggleDarkMode}>
              <CogIcon className="icon" />
              <p>Mode</p>
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
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'fadeIn 0.5s ease-in-out',
          }}
        >
          <div
            ref={cityListRef}
            className="city-list-container"
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
              width: '400px',
              maxWidth: '80vw',
              maxHeight: '80vh',
              overflowY: 'auto',
              animation: 'slideDown 0.5s ease-in-out',
            }}
          >
            <h4 className="text-center mb-4 text-black text-2xl font-quicksand">Sélectionnez une ville</h4>
            <ListGroup>
              {['Paris', 'Londres', 'New York', 'Berlin', 'Pekin', 'Istanbul', 'Shanghai', 'Bombay'].map((city) => (
                <ListGroup.Item
                  key={city}
                  action
                  onClick={() => handleCityClick(city)}
                  className="text-center font-quicksand"
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
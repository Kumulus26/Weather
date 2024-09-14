
import React from 'react';
import Navbar from './components/Navbar';
import WeatherInfo from './components/WeatherInfo';
import Forecast from './components/Forecast';
import AirConditions from './components/AirConditions';
import SearchBar from './components/SearchBar';
import PrevisionsWeather from './components/PrevisionsWeather';
import 'bootstrap/dist/css/bootstrap.min.css';

<link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
function App() {
  return (
    <div className="app-grid">
      <div className="navbar-box">
      <Navbar />
      </div>
      <div className="main-content">
        <SearchBar />

        <div className="main-grid">
          <div className="left-column">
            <WeatherInfo />
            <Forecast />
            <AirConditions />
          </div>

          {/* Colonne droite */}
          <div className="right-column">
            <PrevisionsWeather />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
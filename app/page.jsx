
import React from 'react';
import Navbar from './components/Navbar';
import WeatherInfo from './components/WeatherInfo';
import Forecast from './components/Forecast';
import AirConditions from './components/AirConditions';
import SearchBar from './components/SearchBar';
import PrevisionsWeather from './components/PrevisionsWeather';

function App() {
  return (
    <div className="app">
      {/* Barre latérale gauche */}
      <Navbar />
      
      {/* Contenu principal */}
      <div className="content">
        <SearchBar />
        
        <div className="main-info">
          <div className="left-column">
            <WeatherInfo />
            <Forecast />
            <AirConditions />
          </div>
          <div className="right-column">
          <PrevisionsWeather />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
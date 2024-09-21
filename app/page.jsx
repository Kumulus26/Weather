'use client'
import React from 'react';
import Navbar from './components/Navbar';
import WeatherInfo from './components/WeatherInfo';
import Forecast from './components/Forecast';
import AirConditions from './components/AirConditions';
import SearchBar from './components/SearchBar';
import PrevisionsWeather from './components/PrevisionsWeather';
import { useState, useEffect } from 'react';

function App() {

const [city, setCity] = useState('Paris');
const [weatherData, setWeatherData] = useState(null);

const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(`/api/weather?city=${city}`);
    
    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération des données météo pour ${city}`);
    }
    
    const data = await response.json();
    setWeatherData(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo :", error);
  }
};

useEffect(() => {
  fetchWeatherData(city);
}, [city]);

const handleCitySearch = (searchedCity) => {
  setCity(searchedCity); 
};

  return (
    <div className="app-grid">
      <div className="navbar-box">
      <Navbar />
      </div>
      <div className="main-content">
        <SearchBar onCitySearch={handleCitySearch}/>
        <div className="main-grid">
          <div className="left-column">
            <WeatherInfo city={city} weatherData={weatherData}/>
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
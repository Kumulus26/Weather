'use client'
import React from 'react';
import Navbar from './components/Navbar';
import WeatherInfo from './components/WeatherInfo';
import Forecast from './components/Forecast';
import AirConditions from './components/AirConditions';
import SearchBar from './components/SearchBar';
import PrevisionsWeather from './components/PrevisionsWeather';
import { useState } from 'react';

function App() {

const [city, setCity] = useState('');
const [weatherData, setWeatherData] = useState(null);
const handleCitySearch = async (searchedCity) => {
  setCity(searchedCity);
  const reponse = await fetch(`/api/weather?city='${searchedCity}`);
  const data = await Response.json();

  setWeatherData(data);
};

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
          <div className="right-column">
            <PrevisionsWeather />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
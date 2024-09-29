'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WeatherInfo from './components/WeatherInfo';
import Forecast from './components/Forecast';
import AirConditions from './components/AirConditions';
import SearchBar from './components/SearchBar';
import PrevisionsWeather from './components/PrevisionsWeather';
import Loading from './components/Loading';

function App() {
  const [city, setCity] = useState('Paris');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeatherData = async (city) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/weather?city=${city}`);
      if (!response.ok) throw new Error(`Erreur lors de la récupération des données météo pour ${city}`);
      const data = await response.json();
      setWeatherData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des données météo :", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const handleCitySearch = (searchedCity) => {
    setCity(searchedCity);
  };

  const handleSelectCityFromNavbar = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="app-grid">
          <div className="navbar-box">
            <Navbar onSelectCity={handleSelectCityFromNavbar} /> {/* On passe la fonction ici */}
          </div>
          <div className="main-content">
            <SearchBar onCitySearch={handleCitySearch} />
            <div className="main-grid">
              <div className="left-column">
                <WeatherInfo city={city} weatherData={weatherData} />
                <Forecast />
                <AirConditions />
              </div>
              <div className="previsions-box">
                <PrevisionsWeather />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
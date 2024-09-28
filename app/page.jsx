'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import WeatherInfo from './components/WeatherInfo';
import Forecast from './components/Forecast';
import AirConditions from './components/AirConditions';
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';

const cache = {};
const PrevisionsWeather = dynamic(() => import('./components/PrevisionsWeather'), {
  ssr: false, 
});

function App() {
  const [city, setCity] = useState('Paris');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeatherData = async (city) => {
    if (cache[city]) {
      setWeatherData(cache[city]);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(`/api/weather?city=${city}`);
      if (!response.ok) throw new Error(`Erreur lors de la récupération des données météo pour ${city}`);

      const data = await response.json();
      cache[city] = data;  // Mettre en cache la réponse

      setWeatherData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des données météo :", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);  // Appel API initial pour la ville sélectionnée
  }, [city]);

  const handleCitySearch = (searchedCity) => setCity(searchedCity);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="app-grid">
          <div className="navbar-box">
            <Navbar />
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
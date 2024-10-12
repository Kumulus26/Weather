'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import WeatherInfo from '../components/WeatherInfo';
import Forecast from '../components/Forecast';
import AirConditions from '../components/AirConditions';
import SearchBar from '../components/SearchBar';
import PrevisionsWeatherFiveDays from '../components/PrevisionsWeatherFiveDays';
import Loading from '../components/Loading';
import Heure from '../components/Heure';

function App() {
  const router = useRouter();
  const params = useParams();
  const city = decodeURIComponent(params.city || 'Paris'); // Récupère la ville depuis les paramètres de l'URL
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeatherData = async (city) => {
    try {
      if (!city) return;
      setIsLoading(true);
      const response = await fetch(`/api/weather?city=${city}`);
      if (!response.ok) throw new Error(`Erreur lors de la récupération des données météo pour ${city}`);
      const data = await response.json();
      setWeatherData(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo :', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData(city); // Récupère les données météo pour la ville de l'URL
    }
  }, [city]);

  const handleCitySearch = (searchedCity) => {
    router.push(`/${searchedCity}`); // Redirige vers la nouvelle ville
  };

  const handleSelectCityFromNavbar = (selectedCity) => {
    router.push(`/${selectedCity}`); // Redirige via la navbar vers la nouvelle ville
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="app-grid">
          <div className="navbar-box">
            <Navbar onSelectCity={handleSelectCityFromNavbar} />
          </div>
          <div className="main-content">
            <SearchBar onCitySearch={handleCitySearch} />
            <div className="main-grid">
              <div className="left-column">
                <Heure className="heure-box" city={city} />
                <WeatherInfo city={city} weatherData={weatherData} />
                <Forecast />
                <AirConditions city={city} />
              </div>
              <div className="previsions-box">
                {/* Transmet la ville au composant PrevisionsWeatherFiveDays */}
                <PrevisionsWeatherFiveDays city={city} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
'use client';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faBolt, faSnowflake, faCloudRain, faCloudSun, faSmog } from '@fortawesome/free-solid-svg-icons';

const weatherIconMap = {
  "clear sky": faSun,
  "few clouds": faCloudSun,
  "scattered clouds": faCloud,
  "broken clouds": faCloudSun,
  "shower rain": faCloudRain,
  "rain": faCloudRain,
  "thunderstorm": faBolt,
  "snow": faSnowflake,
  "mist": faSmog,
};

function getWeatherIcon(condition) {
  return weatherIconMap[condition.toLowerCase()] || faSun;
}

function WeatherInfo({ city, weatherData }) {
  const [iconVisible, setIconVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIconVisible(true);
      }
    });

    const element = document.getElementById('weather-icon');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  if (!city) {
    return <p>Ville non spécifiée.</p>;
  }

  if (!weatherData) {
    return <p>Chargement des données pour {city}...</p>;
  }

  const temperature = weatherData.temperature !== undefined ? `${weatherData.temperature}°C` : 'Température indisponible';
  const weatherCondition = weatherData.condition || 'clear sky';  
  const weatherIcon = getWeatherIcon(weatherCondition);

  return (
    <div className="weather-info flex items-center justify-between p-4 bg-gray-800 text-white rounded-xl">
      <div className="ville-temp">
        <h2 className="text-3xl font-bold">{city}</h2>
      </div>
      <div className="temp">
        <p className="text-6xl font-bold">{temperature}</p>
      </div>
      <div className="temp-media" id="weather-icon">
        {iconVisible && <FontAwesomeIcon icon={weatherIcon} size="3x" />}
      </div>
    </div>
  );
}

export default WeatherInfo;
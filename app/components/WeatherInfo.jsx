'use client'
import React from 'react';
import Image from 'next/image';

function WeatherInfo({ city, weatherData }) {
  if (!city) {
    return <p>.</p>;
  }

  if (!weatherData) {
    return <p>Chargement des données pour {city}...</p>;
  }

  return (
    <div className="temperature-mtn">
        <div className="ville-temp">
            <b><h2>{city}</h2></b> 
            <p>Risque de pluie : 18%</p>
        </div>
        <div className="temp">
            <b><h1>{weatherData.temperature}°C</h1></b>
        </div>
        <Image
          src="/img/sunny.png"
          alt="Soleil"
          width={125}
          height={125}
        />
      </div>
    );
}

export default WeatherInfo;
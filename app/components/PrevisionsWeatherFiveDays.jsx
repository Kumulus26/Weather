'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function PrevisionsWeatherFiveDays({ city }) {
  const [dailyData, setDailyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeatherData = async () => {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données météo.');
      }

      const data = await response.json();

      const filteredData = data.list.filter((reading) =>
        reading.dt_txt.includes("12:00:00")
      );

      setDailyData(filteredData);
      setIsLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo :', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  if (isLoading) {
    return <p>Chargement des prévisions...</p>;
  }

  return (
    <div className="previsions-container">
      <h3>Prévisions sur 5 jours pour {city}</h3>
      <div className="previsions-list">
        {dailyData.map((day, index) => (
          <div key={index} className="prevision-item">
            <p>{new Date(day.dt * 1000).toLocaleDateString('fr-FR', { weekday: 'short' })}</p>
            <Image
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
              width={40}
              height={40}
              loading="lazy"
            />
            <p>{Math.round(day.main.temp_max)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrevisionsWeatherFiveDays;
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

function PrevisionsWeatherFiveDays({ city }) {
  const [dailyData, setDailyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeatherData = async () => {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(apiUrl);
      const filteredData = response.data.list.filter((reading) =>
        reading.dt_txt.includes("12:00:00")
      );
      setDailyData(filteredData);
      setIsLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des données de prévisions météo :', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      setIsLoading(true);
      fetchWeatherData();
    }
  }, [city]);

  if (isLoading) {
    return <p>Chargement des prévisions...</p>;
  }

  if (!dailyData.length) {
    return <p>Aucune prévision disponible pour {city}. Vérifiez le nom de la ville ou réessayez plus tard.</p>;
  }

  return (
    <div className="previsionsFiveDays-container">
      <h3>Prévisions sur 5 jours pour {city}</h3>
      <div className="previsionsFiveDays-list">
        {dailyData.map((day, index) => (
          <div key={index} className="previsionFiveDays-item">
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
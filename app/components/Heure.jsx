import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Heure({ city }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        const { timezone } = response.data;

        const updateTime = () => {
          const parisTime = new Date().toLocaleTimeString('fr-FR', {
            timeZone: 'Europe/Paris',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          });
          setTime(parisTime);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000); 

        return () => clearInterval(intervalId);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de la ville :', error);
      }
    };

    if (city) {
      fetchCityData();
    }
  }, [city]);

  return (
    <div className="heure">
      <p className="text-6xl font-bold">{time}</p>
    </div>
  );
}

export default Heure;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Heure({ city }) {
  const [localTime, setLocalTime] = useState('');
  const [parisTime, setParisTime] = useState('');

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        const { timezone } = response.data;

        const updateTime = () => {
          const now = new Date();

          const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;

          const parisTimeString = new Date(utcTime + 3600 * 1000).toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          });

          const localTimeOffset = utcTime + timezone * 1000;
          const localTimeString = new Date(localTimeOffset).toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          });

          setLocalTime(localTimeString);
          setParisTime(parisTimeString);
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
      <p className="text-5xl">{localTime}</p>
    </div>
  );
}

export default Heure;
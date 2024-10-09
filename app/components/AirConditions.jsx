import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AirConditions({ city }) {
  const [airData, setAirData] = useState({
    feelsLike: null,
    windSpeed: null,
    precipitation: null,
    uvIndex: null,
  });

  useEffect(() => {
    if (!city) return;

    const fetchAirConditions = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
        console.log('Fetching data for city:', city);

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        console.log('Weather data:', response.data);

        const { feels_like } = response.data.main;
        const { speed: windSpeed } = response.data.wind;
        const precipitation = response.data.rain ? response.data.rain['1h'] : 0;

        const uvResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/uvi?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&appid=${apiKey}`
        );
        console.log('UV Index data:', uvResponse.data);
        const uvIndex = uvResponse.data.value;

        setAirData({
          feelsLike: feels_like,
          windSpeed,
          precipitation,
          uvIndex,
        });
        console.log('Air data updated:', {
          feelsLike: feels_like,
          windSpeed,
          precipitation,
          uvIndex,
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des données météorologiques :', error);
      }
    };

    fetchAirConditions();
  }, [city]);

  return (
        <div className="air-conditions">
          <div className="condition1">
            <div className="condition-item">
              <b><p> 🌡️ Ressenti</p></b>
              <h3>{airData.feelsLike !== null ? `${Math.round(airData.feelsLike)}°` : 'Chargement...'}</h3>
            </div>
            <div className="condition-item">
              <b><p> 💧 Précipitations</p></b>
              <h3>{airData.precipitation !== null ? `${Math.round(airData.precipitation)} mm` : 'Chargement...'}</h3>
            </div>
          </div>
          <div className="condition2">
            <div className="condition-item">
              <b><p> 💨 Vent</p></b>
              <h3>{airData.windSpeed !== null ? `${Math.round(airData.windSpeed)} km/h` : 'Chargement...'}</h3>
            </div>
            <div className="condition-item">
              <b><p> ☀️ Indice UV</p></b>
              <h3>{airData.uvIndex !== null ? Math.round(airData.uvIndex) : 'Chargement...'}</h3>
            </div>
          </div>
        </div>
      );
}

export default AirConditions;
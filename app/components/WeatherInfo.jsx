import React from 'react';
import Image from 'next/image';

function WeatherInfo() {
  return (
    <div className="weather-info">
      <div className="city-name">
        <h2>Paris</h2>
        <p>Chance of rain: 18%</p>
      </div>
      <div className="weather-details">
        <h1>15°C</h1>
        <Image
          src="/image/sun.png"
          alt="Soleil"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}

export default WeatherInfo;
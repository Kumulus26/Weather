import React from 'react';
import Image from 'next/image';

function PrevisionsWeather() {
  const dailyData = [
    { day: 'Lun', icon: '/img/sunny.png', maxTemp: '21°C', minTemp: '9°C' },
    { day: 'Mar', icon: '/img/sunny.png', maxTemp: '20°C', minTemp: '10°C' },
    { day: 'Mer', icon: '/img/sunny.png', maxTemp: '23°C', minTemp: '12°C' },
    { day: 'Jeu', icon: '/img/sunny.png', maxTemp: '22°C', minTemp: '12°C' },
    { day: 'Ven', icon: '/img/sunny.png', maxTemp: '21°C', minTemp: '12°C' },
    { day: 'Sam', icon: '/img/sunny.png', maxTemp: '23°C', minTemp: '12°C' },
    { day: 'Dim', icon: '/img/sunny.png', maxTemp: '22°C', minTemp: '13°C' },
  ];

  return (
    <div className="previsions-container">
      <h3>Prévisions sur 7 jours</h3>
      <div className="previsions-list">
        {dailyData.map((day, index) => (
          <div key={index} className="prevision-item">
            <p>{day.day}</p>
            <Image src="/img/sunny.png" alt="weather icon" width={40} height={40} />
            <p>{day.maxTemp} / {day.minTemp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrevisionsWeather;
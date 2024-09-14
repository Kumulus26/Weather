import React from 'react';
import Image from 'next/image'; // Ou <img> si tu n'utilises pas Next.js

function PrevisionsWeather() {
  const dailyData = [
    { day: 'Today', icon: '/img/sunny.png', maxTemp: '36°C', minTemp: '22°C' },
    { day: 'Tue', icon: '/img/sunny.png', maxTemp: '37°C', minTemp: '21°C' },
    { day: 'Wed', icon: '/img/sunny.png', maxTemp: '37°C', minTemp: '21°C' },
    { day: 'Thu', icon: '/img/cloudy.png', maxTemp: '37°C', minTemp: '21°C' },
    { day: 'Fri', icon: '/img/cloudy.png', maxTemp: '37°C', minTemp: '22°C' },
    { day: 'Sat', icon: '/img/rainy.png', maxTemp: '37°C', minTemp: '21°C' },
    { day: 'Sun', icon: '/img/sunny.png', maxTemp: '37°C', minTemp: '21°C' },
  ];

  return (
    <div className="previsions-container">
      <h3>7-Day Forecast</h3>
      <div className="previsions-list">
        {dailyData.map((day, index) => (
          <div key={index} className="prevision-item">
            <p>{day.day}</p>
            <Image src={day.icon} alt="weather icon" width={40} height={40} />
            <p>{day.maxTemp} / {day.minTemp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrevisionsWeather;
import React from 'react';
import Image from 'next/image'; // ou <img> si tu n'utilises pas Next.js

function Forecast() {
  const hourlyData = [
    { time: '6:00 AM', temp: '25°C', icon: '/img/cloudy.png' },
    { time: '9:00 AM', temp: '28°C', icon: '/img/sunny_cloudy.png' },
    { time: '12:00 PM', temp: '33°C', icon: '/img/sunny.png' },
    { time: '3:00 PM', temp: '34°C', icon: '/img/sunny.png' },
    { time: '6:00 PM', temp: '32°C', icon: '/img/sunny.png' },
    { time: '9:00 PM', temp: '30°C', icon: '/img/sunny_cloudy.png' },
  ];

  return (
    <div className="forecast-container">
      <h3>Today's Forecast</h3>
      <div className="forecast-grid">
        {hourlyData.map((hour, index) => (
          <div key={index} className="forecast-item">
            <p>{hour.time}</p>
            <Image src={hour.icon} alt="weather icon" width={40} height={40} />
            <p>{hour.temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
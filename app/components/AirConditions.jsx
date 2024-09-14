import React from 'react';

function AirConditions() {
  const airData = [
    { label: 'Real Feel', value: '30°C' },
    { label: 'Wind', value: '0.2 km/h' },
    { label: 'Chance of rain', value: '0%' },
    { label: 'UV Index', value: '3' },
  ];

  return (
    <div className="air-conditions-container">
      <h3>Air Conditions</h3>
      <div className="air-conditions-grid">
        {airData.map((condition, index) => (
          <div key={index} className="air-condition-item">
            <p>{condition.label}</p>
            <h4>{condition.value}</h4>
          </div>
        ))}
      </div>
      <button className="see-more-button">See more</button>
    </div>
  );
}

export default AirConditions;
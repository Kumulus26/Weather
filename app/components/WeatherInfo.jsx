import React from 'react';
import Image from 'next/image';

function WeatherInfo() {
  return (
    <div className="temperature-mtn">
        <div className="ville-temp">
            <b><h2>Paris</h2></b>
            <p>Risque de pluie : 18%</p>
        </div>
        <div className="temp">
            <b><h1>15°</h1></b>
        </div>
        <Image
          src="/img/sunny.png"
          alt="Soleil"
          width={125}
          height={125}
        />
      </div>
    );
}

export default WeatherInfo;
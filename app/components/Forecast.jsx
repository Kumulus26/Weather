import React from 'react';
import Image from 'next/image';

function Forecast() {
  return (
    <div className="hourly-forecast">
    <div className="forecast-media1">
    <div className="forecast-item">
        <b><p>06:00</p></b>
        <Image src="/img/nuit.png" width="50" height="50" alt="Nuit"/>
        <b><p>6°</p></b>
    </div>
    <div className="forecast-item">
        <b><p>9:00</p></b>
        <Image src="/img/sunny.png" width="50" height="50" alt="Soleil"/>
        <b><p>11°</p></b>
    </div>
    <div className="forecast-item">
        <b><p>12:00</p></b>
        <Image src="/img/sunny.png" width="50" height="50" alt="Soleil"/>
        <b><p>15°</p></b>
    </div>
    </div>
    <div className="forecast-media2">
    <div className="forecast-item">
        <b><p>15:00</p></b>
        <Image src="/img/sunny.png" width="50" height="50" alt="Soleil"/>
        <b><p>19°</p></b>
    </div>
    <div className="forecast-item">
        <b><p>18:00</p></b>
        <Image src="/img/misoleilminuage.png" width="50" height="50" alt="Temps nuageux avec du soleil"/>
        <b><p>17°</p></b>
    </div>
    <div className="forecast-item">
        <b><p>21:00</p></b>
        <Image src="/img/nuit.png" width="50" height="50" alt="Nuit"/>
        <b><p>12°</p></b>
    </div>
    </div>
</div>
  );
}

export default Forecast;
'use client'
import PrevisionsWeatherFiveDays from '../components/PrevisionsWeatherFiveDays';
import Navbar from '../components/Navbar';

export default function CityWeather({ params }) {
  const { city } = params;

  if (!city) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="dynamic-title-box">
      <Navbar/>
      <PrevisionsWeatherFiveDays city={city} />
    </div>
  );
}
import PrevisionsWeatherFiveDays from '../components/PrevisionsWeatherFiveDays';

export default function CityWeather({ params }) {
  const { city } = params; // Utilise params pour accéder à la ville dans l'URL

  // Si la ville n'est pas définie, renvoie un message de chargement
  if (!city) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h1>Prévisions météo pour {city}</h1>
      <PrevisionsWeatherFiveDays city={city} /> {/* Passe la ville au composant */}
    </div>
  );
}
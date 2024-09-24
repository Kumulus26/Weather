import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'City parameter is required' }, { status: 400 });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }

    const data = await response.json();
    const temperatureArrondi = Math.round(data.main.temp);

    return NextResponse.json({
      temperature: temperatureArrondi,
      condition: data.weather[0].description,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur lors de la récupération des données météo' }, { status: 500 });
  }
}
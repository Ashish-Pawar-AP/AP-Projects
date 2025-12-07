// const API_KEY = import.meta.env.WEATHER_API_KEY;
const API_KEY = "28a6fa5c0b98f40984e075bfb26cb97a";

export async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("City not found");

  const data = await res.json();

  return data;
}

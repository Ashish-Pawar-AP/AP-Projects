import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import { getWeather } from "./weatherService.js";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  async function handleSearch(city) {
    try {
      setError("");
      const data = await getWeather(city);

      setWeather(data);
      localStorage.setItem("lastCity", city);
    } catch (err) {
      setError("City not found");
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Weather App</h1>
        <Search onSearch={handleSearch} />
        {error && <p className="text-red-300 text-center mt-4 font-semibold">{error}</p>}
        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}

export default App;

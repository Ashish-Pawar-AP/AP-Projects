export default function WeatherCard(data) {
  const datas = data.data;
  
  return (
    <div className="bg-linear-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg p-6 max-w-sm mx-auto text-white">
      <h2 className="text-3xl font-bold mb-4">{datas.name}</h2>
      
      <div className="flex items-center justify-between mb-4">
        <img
          src={`https://openweathermap.org/img/wn/${datas.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="w-20 h-20"
        />
        <div className="text-5xl font-bold">{datas.main.temp}°C</div>
      </div>
      
      <p className="text-lg capitalize mb-4">{datas.weather[0].description}</p>
      
      <div className="space-y-2 border-t border-blue-300 pt-4">
        <p className="text-base">💧 Humidity: <span className="font-semibold">{datas.main.humidity}%</span></p>
        <p className="text-base">💨 Wind: <span className="font-semibold">{datas.wind.speed} m/s</span></p>
      </div>
    </div>
  );
}

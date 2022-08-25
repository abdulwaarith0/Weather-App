import "./App.css";
import CurrentWeather from "./components/current_weather/current_weather";
import Search from "./components/search/Search";
import { WEATHER_API_URL } from "./api";
import { WEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [foreCast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
    
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    const foreCastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, foreCastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const foreCastResponse = await response[1].json();

      setCurrentWeather({city: Search.label,   ...weatherResponse});
      setForecast({city: Search.label, ...foreCastResponse});
    })

    .catch((err) => console.log(err));
  };
      console.log(currentWeather);
      console.log(foreCast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />

      {CurrentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;

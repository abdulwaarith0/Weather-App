import "./current_weather.css";

const CurrentWeather = () => {
  return (
    // -------- UPPER PART-------- 
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Belgrade</p>
          <p className="weather_description">Sunny</p>
        </div>
        <img
          alt="weather"
          className="weather_icon"
          src="weather_icons/01d.png"
        />
      </div>
{/* // ----------- LOWER PART----------- */}
    <div className="bottom">
        <p className="temperature">18°C</p>
    </div>

    </div>



    
  );
};

export default CurrentWeather;

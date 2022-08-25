import "./current_weather.css";

const CurrentWeather = ({data}) => {
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
        <div className="details">
          <div className="parameter_label">
            <span className="parameter_label de-tail">Details</span> 
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Feels like:</span>
            <span className="parameter_value">22°C</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Wind:</span>
            <span className="parameter_value">2 m/s</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Humidity:</span>
            <span className="parameter_value">15%</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">Pressure:</span>
            <span className="parameter_value">20 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

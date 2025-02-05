import React from 'react';

function CurrentWeather({ data }) {
  return (
    <div className="current-weather">
      <h2>{data.name}, {data.sys.country}</h2>
      <div className="weather-info">
        <img 
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
          alt={data.weather[0].description} 
        />
        <div className="temp-details">
          <h3>{Math.round(data.main.temp)}°F</h3>
          <p>{data.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
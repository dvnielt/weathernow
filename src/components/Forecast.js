import React from 'react';

function Forecast({ forecastData }) {
  return (
    <div className="forecast">
      <div className="forecast-grid">
        {forecastData.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</p>
            <img 
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} 
              alt={day.weather[0].description} 
            />
            <p>{Math.round(day.main.temp)}°F</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
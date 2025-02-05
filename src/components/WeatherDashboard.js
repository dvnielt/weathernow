import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import WeatherAlerts from './WeatherAlerts';

function WeatherDashboard() {
  const [location, setLocation] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState('');

  const API_KEY = '31673e6e299793c401a787ce30a2a1f2';
  const UNSPLASH_ACCESS_KEY = 'ITj4W_p98sGxQZhYPUvmfBbDGMhGWT2RI3uzXZyAZwA'; // Get from unsplash.com

  useEffect(() => {
    async function fetchCityBackground() {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=${location} city landscape&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        const data = await response.json();
        setBackgroundImage(data.urls.full);
      } catch (error) {
        console.error('Error fetching city background:', error);
      }
    }

    async function fetchWeatherData() {
      try {
        // Current Weather
        const currentResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=imperial`
        );
        const currentData = await currentResponse.json();
        setWeatherData(currentData);

        // 5-Day Forecast
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=imperial`
        );
        const forecastData = await forecastResponse.json();
        setForecast(forecastData.list.filter((_, index) => index % 8 === 0));

        // Weather Alerts
        const alertsResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&exclude=current,minutely,hourly&appid=${API_KEY}`
        );
        const alertsData = await alertsResponse.json();
        setAlerts(alertsData.alerts || []);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    fetchCityBackground();
    fetchWeatherData();
  }, [location]);

  return (
    <div 
      className="weather-dashboard"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        transition: 'background-image 0.5s ease-in-out'
      }}
    >
      <SearchBar onLocationChange={setLocation} />
      {weatherData && (
        <>
          <CurrentWeather data={weatherData} />
          <Forecast forecastData={forecast} />
          <WeatherAlerts alerts={alerts} />
        </>
      )}
    </div>
  );
}

export default WeatherDashboard;
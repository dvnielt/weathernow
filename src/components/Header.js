import React from 'react';

function Header() {
  return (
    <div className="app-header">
      <h1>WeatherNow</h1>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#forecast">Forecast</a>
        <a href="#alerts">Alerts</a>
      </div>
    </div>
  );
}

export default Header;
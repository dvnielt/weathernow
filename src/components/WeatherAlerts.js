import React from 'react';

function WeatherAlerts({ alerts }) {
  if (alerts.length === 0) {
    return <div className="no-alerts">No active weather alerts</div>;
  }

  return (
    <div className="weather-alerts">
      <h3>Weather Alerts</h3>
      {alerts.map((alert, index) => (
        <div key={index} className="alert-card">
          <h4>{alert.event}</h4>
          <p>{alert.description}</p>
          <p>Start: {new Date(alert.start * 1000).toLocaleString()}</p>
          <p>End: {new Date(alert.end * 1000).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherAlerts;
import React from 'react';
import WeatherDashboard from './components/WeatherDashboard';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherDashboard />
    </div>
  );
}

export default App;
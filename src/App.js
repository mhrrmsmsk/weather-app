// src/App.js
import React from 'react';
import './App.css';
import { WeatherProvider } from './components/WeatherContext';
import WeatherDashboard from './components/WeatherDashboard';

function App() {

  return (
<>
<WeatherProvider>
  <WeatherDashboard/>
</WeatherProvider>
</>
  );
}

export default App;
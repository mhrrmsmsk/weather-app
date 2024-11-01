import React, { useContext, useState } from 'react';
import { WeatherContext } from './WeatherContext';
import './WeatherDashboard.css';


const WeatherDashboard = () => {
  const { weatherData, location, setLocation } = useContext(WeatherContext);
  
   // Veri yüklenirken bir mesaj göster
   if (!weatherData || !weatherData.location) {
    return <p>Hava durumu verileri yükleniyor...</p>;
  }
  const handleLocationChange = (event)=>{
    setLocation(event.target.value);
  }
  return (
    <div className='App'>
    <div className='app-container'>
      <h1 className='app-title '>{weatherData.location.name} Hava Durumu</h1>
      <div className='input-container'>
        <input className='location-input' type='text' placeholder='Şehir Giriniz' value={location} onChange={handleLocationChange} />
      </div>
    
    </div>
    
    {weatherData && weatherData.forecast && weatherData.forecast.forecastday && (
        <div className='weather-container'>
            {weatherData.forecast.forecastday.map((day) => (
                <div className='day-container' key={day.date}>
                    <h2 className='date'>{day.date}</h2>
                    <img
                        className='weather-icon'
                        src={day.day.condition.icon}
                        alt={day.day.condition.text} 
                    />
                    <p className='temprature'>{day.day.avgtemp_c} C</p>
                    <p className='temprature'>{day.day.condition.text}</p>
                </div>
            ))}
        </div>
    )}
       </div>
  );
};

export default WeatherDashboard;
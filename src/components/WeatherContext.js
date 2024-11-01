import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState('Istanbul'); 
  const [weatherData, setWeatherData] = useState(null);
  
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`);
        setWeatherData(response.data);
        console.log('Fetched Data:', response.data);
        
      } catch (error) {
        console.log(error);
      }
    };

    if(location){
      fetchData();
    }
  },[location]);

  return (
    <WeatherContext.Provider value={{ weatherData,location, setLocation }}>
      {children}
    </WeatherContext.Provider>
  );
};
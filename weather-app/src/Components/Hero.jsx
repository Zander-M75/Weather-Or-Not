import React, { useState, useEffect } from 'react';
import { getCurrentWeather } from '../Services/weatherService';

const Hero = ({ city }) => {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    getCurrentWeather(city)
      .then(response => {
        setCurrentWeather(response.data);
      })
      .catch(error => {
        console.error("Error fetching current weather", error);
      });
  }, [city]);

  return (
    <div className="bg-blue-200 text-center p-8">
      {currentWeather ? (
        <div>
          <h1 className="text-3xl font-bold">{currentWeather.location.name}</h1>
          <p className="text-xl">{currentWeather.current.temp_c}°C</p>
          <p className="text-md">{currentWeather.current.condition.text}</p>
          <img src={currentWeather.current.condition.icon} alt="Weather Icon" className="mx-auto" />
          {/* Add more weather details here */}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Hero;


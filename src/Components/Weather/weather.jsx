import React, { useState, useEffect } from 'react';
import './weather.scss';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  useEffect(() => {
    console.log("Weather Data:", weatherData);
  }, [weatherData]);

  const fetchWeatherData = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=4b08038be84d4dfeb39114521232007&q=${latitude},${longitude}&aqi=no`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const getWeatherIcon = (iconUrl) => {
    return <img src={iconUrl} className="icon" alt="Weather Icon" />;
  };

  const getWeatherConditionText = () => {
    if (weatherData && weatherData.current && weatherData.current.condition) {
      return weatherData.current.condition.text;
    }
    return "Loading...";
  };

  return (
    <>
      {weatherData ? (
        <div className="weather">
          {getWeatherIcon(weatherData.current.condition.icon)}
          <span className="temperature">{weatherData.current.temp_c} °C</span>
          <p className="condition">{getWeatherConditionText()}</p>
        </div>
      ) : (
        <div className="loading"><p>Loading...</p></div>
      )}
    </>
  );
};

export default WeatherWidget;

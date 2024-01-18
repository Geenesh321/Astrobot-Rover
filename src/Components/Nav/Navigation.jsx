import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaSkyatlas } from 'react-icons/fa';
import { RiThunderstormsFill, RiLiveLine } from 'react-icons/ri';
import { IoShareSocialOutline } from "react-icons/io5";
import { TiWeatherWindyCloudy, TiWeatherPartlySunny } from 'react-icons/ti';
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillCloudRainFill, BsCloudSnowFill, BsFillCloudHaze2Fill, BsMoisture } from 'react-icons/bs';
import './navigation.scss';

const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherData, setWeatherData] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    fetchWeatherData();
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const fetchWeatherData = async () => {
    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=f01a18229a8141859cd55311232407&q=${latitude},${longitude}&aqi=no`
        );

        const data = await response.json();
        setWeatherData(data);
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const getWeatherIcon = (conditionCode) => {
    if (conditionCode >= 200 && conditionCode < 300) {
      return <RiThunderstormsFill />;
    } else if (conditionCode >= 300 && conditionCode < 600) {
      return <BsFillCloudRainFill />;
    } else if (conditionCode >= 600 && conditionCode < 700) {
      return <BsCloudSnowFill />;
    } else if (conditionCode >= 700 && conditionCode < 800) {
      return <TiWeatherWindyCloudy />;
    } else if (conditionCode === 800) {
      return <FaSkyatlas />;
    } else if (conditionCode > 800 && conditionCode < 900) {
      return <BsFillCloudHaze2Fill />;
    } else {
      return <TiWeatherPartlySunny />;
    }
  };

  const getWeatherConditionText = (conditionCode) => {
    if (weatherData && weatherData.current.condition) {
      return weatherData.current.condition.text;
    }
    return "Loading...";
  };

  return (
    <>
      <div className="display">
        <div className="navigation">
          {weatherData ? (
            <div className="weather">
              {getWeatherIcon(weatherData.current.condition.code)}
              <span>{weatherData.current.temp_c}   ° C</span>
              <p>{getWeatherConditionText()}</p>
            </div>
          ) : (
            <span className="loading">Loading...</span>
          )}

          <ul className="Nav_Body">
            <li onClick={() => handleItemClick(0)} className={`your-li-class ${activeIndex === 0 ? 'active' : ''}`}>
              <div className="icon-and-text">
                <span className="icon"><LiaTemperatureHighSolid /></span>
                <span className="text">Temp</span>
              </div>
            </li>
            <li onClick={() => handleItemClick(1)} className={`your-li-class ${activeIndex === 1 ? 'active' : ''}`}>
              <div className="icon-and-text">
                <span className="icon"><BsMoisture /></span>
                <span className="text">Moist</span>
              </div>
            </li>
            <li onClick={() => handleItemClick(2)} className={`your-li-class ${activeIndex === 2 ? 'active' : ''}`}>
              <div className="icon-and-text">
                <span className="icon"><RiLiveLine /></span>
                <span className="text">Live</span>
              </div>
            </li>
            <li onClick={() => handleItemClick(3)} className={`your-li-class ${activeIndex === 3 ? 'active' : ''}`}>
              <div className="icon-and-text">
                <span className="icon"><IoShareSocialOutline /></span>
                <span className="text">Netlink</span>
              </div>
            </li>
            <li onClick={() => handleItemClick(4)} className={`your-li-class ${activeIndex === 4 ? 'active' : ''}`} style={{marginTop:'30px'}}>
              <div className="icon-and-text">
                <span className="icon"><IoPersonSharp /></span>
                <span className="text">Login</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;

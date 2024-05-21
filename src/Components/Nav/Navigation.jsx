import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiLiveLine } from 'react-icons/ri';
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { IoPersonSharp } from "react-icons/io5";
import { BsMoisture } from 'react-icons/bs';

import './navigation.scss';
import Weather from '../Weather/weather';


const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (index) => {
    setActiveIndex(index);
    const routes = ['/temperature', '/moist', '/live', '/netlink', '/Logout'];
    navigate(routes[index]);
  };

  return (
    <>
        <ul className="Nav_Body">
          <Weather />

          <li onClick={() => handleItemClick(0)} className={`your-li-class ${activeIndex === 0 ? 'active' : ''}`} style={{ marginTop: '20px' }}>
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
          <li onClick={() => handleItemClick(4)} className={`your-li-class ${activeIndex === 4 ? 'active' : ''}`} style={{ marginTop: '20px' }}>
            <div className="icon-and-text">
              <span className="icon"><IoPersonSharp /></span>
              <span className="text">Logout</span>
            </div>
          </li>
        </ul>
    </>
  );
};

export default Navigation;

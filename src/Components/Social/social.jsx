import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';


import { format } from 'date-fns';
import './social.scss';

const Social = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="social_media">
      <ul className="icon_row">
        <li><a href="/"><FaFacebookF /></a></li>
        <li><a href="/"><FaInstagram /></a></li>
        <li><a href="/"><FaGithub /></a></li>
        <li><a href="/"><FaLinkedinIn /></a></li>
      </ul>

      <div className="time">{format(currentTime, 'h:mm:ss a')}</div>
    </div>
  );
};

export default Social;

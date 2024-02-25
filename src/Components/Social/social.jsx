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
        <li><a href="https://www.facebook.com/geenesh.acharya.5"><FaFacebookF /></a></li>
        <li><a href="https://www.instagram.com/geenesh_/"><FaInstagram /></a></li>
        <li><a href="https://github.com/Geenesh321"><FaGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/geenesh/"><FaLinkedinIn /></a></li>
      </ul>

      <div className="time">{format(currentTime, 'h:mm:ss a')}</div>
    </div>
  );
};

export default Social;
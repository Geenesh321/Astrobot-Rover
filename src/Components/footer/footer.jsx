import React from 'react';
import {  FaInstagram } from 'react-icons/fa';
import { FiFacebook , FiGithub , FiLinkedin } from "react-icons/fi";


import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">

      <section className="social-media">

        <ul className="icon_row">
          <li><a href="https://www.facebook.com/geenesh.acharya.5"><FiFacebook /></a></li>
          <li><a href="https://www.instagram.com/geenesh_/"><FaInstagram /></a></li>
          <li><a href="https://github.com/Geenesh321"><FiGithub  /></a></li>
          <li><a href="https://www.linkedin.com/in/geenesh/"><FiLinkedin  /></a></li>
        </ul>

      </section>

      <nav className="footer-nav">
        <a href="/Landing" className="nav-item">Home</a>
        <a href="/temperature" className="nav-item">Temperature</a>
        <a href="/moist" className="nav-item">Moisture</a>
        <a href="/live" className="nav-item">Live</a>
        <a href="/netlink" className="nav-item">NetLink</a>
      </nav>

      <div className="copyright">
        © 2023 all rights reserved
      </div>
    </footer>
  );
};

export default Footer;


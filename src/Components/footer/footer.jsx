import React from 'react';
import {  FaInstagram } from 'react-icons/fa';
import { FiFacebook , FiGithub , FiLinkedin } from "react-icons/fi";


import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">

      <section className="social-media">

        <ul className="icon_row">
          <li><a href="/"><FiFacebook /></a></li>
          <li><a href="/"><FaInstagram /></a></li>
          <li><a href="/"><FiGithub  /></a></li>
          <li><a href="/"><FiLinkedin  /></a></li>
        </ul>

      </section>

      <nav className="footer-nav">
        <a href="/" className="nav-item">Home</a>
        <a href="/climate" className="nav-item">Climate</a>
        <a href="/moisture" className="nav-item">Moisture</a>
        <a href="/netlink" className="nav-item">NetLink</a>
        <a href="/stream" className="nav-item">Stream</a>
      </nav>

      <div className="copyright">
        © 2023 all rights reserved
      </div>
    </footer>
  );
};

export default Footer;


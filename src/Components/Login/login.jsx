import React from 'react';
import './login.scss';

import { MdOutlineMail } from "react-icons/md";
import { FiKey  } from "react-icons/fi";


const Login = () => {
  return (
    <div className="login">
      <div className="left-card">
        <div className="Lheader">
          <img alt="Brand" src={require("/Astrobot-Rover/Frontend/src/Assets/Register/brand.png")} />
        </div>
        <div className="Lbody">
        <img alt="Brand" src={require("/Astrobot-Rover/Frontend/src/Assets/Login/Laptop.png")} />
        </div>
        <div className="Lfooter">
          <p>
            <span className="quote">"Tiny changes can bring about remarkable results."</span><br/><br/>
            <span className="author">- James Clear</span>
          </p>
        </div>
      </div>
      <div className="right-card">
        <div className="Rheader">
          <h3>Log In</h3>
        </div>
        <div className="Rbody">
          <div className="input-icon-wrap">

            <span className="input-icon">
            <MdOutlineMail className="input-icon" />
            </span>
            
          <input type="text" className="input-with-icon" id="email-input" placeholder="Email" />
          </div>
          <div className="input-icon-wrap">
            <span className="input-icon">
            <FiKey className="input-icon" />
            </span>
            <input type="password" className="input-with-icon" id="password-input" placeholder="Password" />
          </div>
          <div className="password-details">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me" className="cursor-pointer">Remember me</label>
            </div>
            <div>
              <span className="cursor-pointer">Forgot Password?</span>
            </div>
          </div>
          <div>
            <button className="btn login-button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import './logout.scss';

const Logout = () => {

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
            <span className="quote">"Tiny changes can bring about remarkable results."</span><br /><br />
            <span className="author">- James Clear</span>
          </p>
        </div>
      </div>
      <div className="right-card">
        <div className="logout-modal-header">
          <span className="logout-icon">
            <img alt="Brand" src={require("/Astrobot-Rover/Frontend/src/Assets/Logout/logout.png")} />
          </span>
          Are you leaving? 
        </div>
        <div className="logout-modal-body">
          Are you sure you want to log out? All your unsaved Data will be lost.
        </div>
        <div className="logout-modal-footer">
          <button className="btn cancel-btn" href="#" >Cancel</button>
          <button className="btn confirm-btn" href="#" >Yes</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;

import React from 'react';
import './logout.scss';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/Landing');
  };

  const handleConfirmClick = () => {
    navigate('/');
  };

  return (
    <div className="login">
      <div className="left-card">
        <div className="Lheader">
          <img alt="Brand" src={require("../../Assets/Register/brand.png")} />
        </div>
        <div className="Lbody">
          <img alt="Brand" src={require("../../Assets/Login/Laptop.png")} />
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
            <img alt="Brand" src={require("../../Assets/Logout/logout.png")} />
          </span>
          Are you leaving?
        </div>
        <div className="logout-modal-body">
          Are you sure you want to log out? All your unsaved Data will be lost.
        </div>

        <div className="logout-modal-footer">
          <button className="btn cancel-btn" onClick={handleCancelClick}> Cancel </button>
          <button className="btn confirm-btn" onClick={handleConfirmClick}> Yes </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;

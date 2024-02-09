import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './bar.scss';

const NavBar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleUserClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogoutClick = () => {
        navigate('/logout');
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div className="header">
            <div className='user-container' onClick={handleUserClick}>
                <a href="/" onClick={handleLogoClick}>
                    <img alt="Logo-Astrobot" src={require("/Astrobot-Rover/Frontend/src/Assets/Temperature/Logo.png")} className='Astro-logo' />
                </a>
                <img alt="Icon" src={require("/Astrobot-Rover/Frontend/src/Assets/Temperature/user.png")} className='User' />
            </div>
            {isDropdownOpen && (
                <div className="dropdown">
                    <p>Welcome Zenas</p>
                    <button className="user_Logout" onClick={handleLogoutClick}> Logout </button>
                </div>
            )}
        </div>
    );
};

export default NavBar;

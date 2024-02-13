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
            <div className='user-container'>
                <img
                    alt="Logo-Astrobot"
                    src={require("/Astrobot-Rover/Frontend/src/Assets/Temperature/Logo.png")}
                    className='Astro-logo'
                    onClick={handleLogoClick} 
                />
                <img
                    alt="Icon"
                    src={require("/Astrobot-Rover/Frontend/src/Assets/Temperature/user.png")}
                    className='User'
                    onClick={handleUserClick} 
                />
            </div>
            {isDropdownOpen && (
                <div className="dropdown">
                    <p>Welcome Zenas</p>
                    <button className="user-logout" onClick={handleLogoutClick}> Logout </button>
                </div>
            )}
        </div>
    );
};

export default NavBar;
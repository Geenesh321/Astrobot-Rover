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
            <div className="logo-container" onClick={handleLogoClick}>
                <img
                    src={require("/Astrobot-Rover/Frontend/src/Assets/Temperature/Logo.png")}
                    alt="Logo-Astrobot"
                    className="logo"
                />
            </div>
            <div className="user-container" onClick={handleUserClick}>
                <img
                    src={require("/Astrobot-Rover/Frontend/src/Assets/Temperature/user.png")}
                    alt="User Icon"
                    className="user-icon"
                />
                {isDropdownOpen && (
                    <div className="dropdown">
                        <p>Welcome Zenas</p>
                        {/* <p>{post.user.full_name}</p> */}

                        <button className="user-logout" onClick={handleLogoutClick}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;

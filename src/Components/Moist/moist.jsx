import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './moist.scss';
import Footer from '../footer/footer';

const Moist = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('contentTemperature');
    const [activeSubTab, setActiveSubTab] = useState('lineGraph');
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        navigate('/logout');
    };

    const handleUserClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        setActiveSubTab('lineGraph');
    };

    const handleSubTabClick = (subTabId) => {
        setActiveSubTab(subTabId);
    };

    return (
        <>
            <div className="temperature-container">
                <div className="header">
                    <div className='user-container' onClick={handleUserClick}>
                        <img alt="Logo-Astrobot" src={require("/Astrobot-Rover/Frontend/src/Assets/Temperature/Logo.png")} className='Astro-logo' />
                        <img alt="Icon" src={require("/Astrobot-Rover/Frontend/src/Assets/Temperature/user.png")} className='User' />
                    </div>
                    {isDropdownOpen && (
                        <div className="dropdown">
                            <p>Welcome Zenas</p>
                            <button className="user_Logout" onClick={handleLogoutClick}> Logout </button>
                        </div>
                    )}
                </div>

                <div className='temp-section'>
                    <img
                        alt="temp-photo"
                        src={require("/Astrobot-Rover/Frontend/src/Assets/Moist/Gen.png")}
                        className='temp-photo' />
                    <div className='temp-heading'>
                        <h1>Find Real-Time Moisture & U.V Radiation</h1>
                    </div>
                </div>

                <div className='container'>
                    <div className='desc'>
                        <h3>NodeMCU with Soil-Moisture & U.V</h3>
                        <p>The circuit diagram illustrates how a soil moisture sensor and UV sensor are connected to an ESP8266 module on an Astrobot Rover to allow real-time monitoring of environmental parameters. The soil moisture sensor analog output pin and the UV sensor output pin are connected to analog inputs on the LoLin ESP8266 board to measure soil moisture and UV intensity respectively. Shared power and ground connections enable the rover to retrieve the sensor data.</p>
                    </div>

                    <div className='image-container'>
                        <img
                            alt="temp-photo"
                            src={require("/Astrobot-Rover/Frontend/src/Assets/Moist/Moist.png")}
                            className='image' />
                    </div>
                </div>

                <div className='temp-head'>
                    <h1>Astrobot Explore Rover & It’s Data</h1>
                    <p>Visualize Soil moisture and Ulteavoilate Radiatiot data using a line graph and intuitive
                        color-coded scheme  for clear user analysis.</p>
                </div>

                {/* Tabs Section */}
                <div className="tabs-container">
                    <div className="tabs">
                        {/* Temperature Tab */}
                        <div className={`tab ${activeTab === 'contentTemperature' ? 'active' : ''}`}
                            onClick={() => handleTabClick('contentTemperature')}> Temperature </div>

                        {/* Humidity Tab */}
                        <div
                            className={`tab ${activeTab === 'contentHumidity' ? 'active' : ''}`}
                            onClick={() => handleTabClick('contentHumidity')}> Humidity </div>
                    </div>

                    {/* Sub-Tabs Section */}
                    <div className="sub-tabs">
                        <div
                            className={`sub-tab ${activeSubTab === 'lineGraph' ? 'active' : ''}`}
                            onClick={() => handleSubTabClick('lineGraph')}> Line Graph </div>

                        <div className={`sub-tab ${activeSubTab === 'digitalData' ? 'active' : ''}`}
                            onClick={() => handleSubTabClick('digitalData')}> Digital Data </div>

                        <div className={`sub-tab ${activeSubTab === 'analysis' ? 'active' : ''}`}
                            onClick={() => handleSubTabClick('analysis')}> Analysis </div>
                    </div>

                    {/* Tab Content */}
                    <div className={`tab-content ${activeTab === 'contentTemperature' ? 'active' : ''}`}>
                        {/* Content for Temperature tab goes here */}
                        {activeSubTab === 'lineGraph' && (
                            <iframe
                                width="450"
                                height="260"
                                style={{ border: '1px solid #cccccc' }}
                                src="https://thingspeak.com/channels/2342977/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=line"
                                title="Temperature Chart"
                            ></iframe>
                        )}


                        {activeSubTab === 'digitalData' && (
                            <iframe
                                width="450"
                                height="260"
                                style={{ border: '1px solid #cccccc' }}
                                src="https://thingspeak.com/channels/2342977/widgets/747436"
                                title="Temperature Chart"
                            ></iframe>
                        )}


                        {activeSubTab === 'analysis' && (
                            <iframe
                                width="450"
                                height="260"
                                style={{ border: '1px solid #cccccc' }}
                                src="https://thingspeak.com/channels/2342977/widgets/747436"
                                title="Temperature Chart"
                            ></iframe>
                        )}
                    </div>
                    <div className={`tab-content ${activeTab === 'contentHumidity' ? 'active' : ''}`}>


                        {activeSubTab === 'lineGraph' && (
                            <iframe
                                width="450"
                                height="260"
                                style={{ border: '1px solid #cccccc' }}
                                src="https://thingspeak.com/channels/2342977/charts/2?bgcolor=%23ffffff&color=%23d62020&results=60&title=Humidity"
                                title="Temperature Chart"
                            ></iframe>
                        )}


                        {activeSubTab === 'digitalData' && (
                            <iframe
                                width="450"
                                height="260"
                                style={{ border: '1px solid #cccccc' }}
                                src="https://thingspeak.com/channels/2342977/widgets/747436"
                                title="Temperature Chart"
                            ></iframe>
                        )}


                        {activeSubTab === 'analysis' && (
                            <iframe
                                width="450"
                                height="260"
                                style={{ border: '1px solid #cccccc' }}
                                src="https://thingspeak.com/channels/2342977/widgets/747436"
                                title="Temperature Chart"
                            ></iframe>
                        )}
                    </div>



                </div>


                <div className="app">
                    <Footer />
                </div>
            </div >
        </>
    );
};

export default Moist;
import React, { useState } from 'react';
import './temperature.scss';
import NavBar from '../NavBar/bar';
import Footer from '../footer/footer';
import Nav from "../Nav/Navigation";


const Temperature = () => {
  const [activeTab, setActiveTab] = useState('contentTemperature');
  const [activeSubTab, setActiveSubTab] = useState('lineGraph');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setActiveSubTab('lineGraph');
  };

  const handleSubTabClick = (subTabId) => {
    setActiveSubTab(subTabId);
  };

  return (
    <>
    <Nav />
      <div className="temperature-container">
        <NavBar/>

        <div className='temp-section'>
          <img
            alt=""
            src={require("/Astrobot-Rover/Frontend/src/Assets/Temperature/sun.jpg")}
            className='temp-photo' />
          <div className='temp-heading'>
            <h1>Find Real-Time Temperature Data</h1>
          </div>
        </div>

        <div className='container'>
          <div className='desc'>
            <h3>NodeMCU with DHT11</h3>
            <p>A DHT11 sensor is used in this circuit to measure humidity, Heat Index and temperature. The circuit board is an ESP8266, which is a WI-Fi module that can be programmed to send and receive data. The DHT11 sensor has four pins, but only three are used: Vcc for power, Data Pin for data transmission, and GND for ground. The sensor is connected to the circuit board by three wires. This image is likely used for teaching or learning purposes in electronics.</p>
          </div>

          <div className='image-container'>
            <img
              alt=""
              src={require("/Astrobot-Rover/Frontend/src/Assets/Temperature/DHt11.png")}
              className='image' />
          </div>
        </div>

        <div className='temp-head'>
          <h1>Astrobot Explore Rover & It’s Data</h1>
          <p>Visualize humidity, temperature, and heat index data using a line graph and intuitive
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

            {/* Heat Index Tab */}
            <div
              className={`tab ${activeTab === 'contentHeatIndex' ? 'active' : ''}`}
              onClick={() => handleTabClick('contentHeatIndex')}> Heat Index </div>
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
                src="https://thingspeak.com/channels/2342977/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=line"
                title="Temperature Chart"
              ></iframe>
            )}


            {activeSubTab === 'digitalData' &&(
              <iframe
                src="https://thingspeak.com/channels/2342977/widgets/788873"
                title="Temperature Chart"
              ></iframe>
            )}


            {activeSubTab === 'analysis' &&(
              <iframe
                src="https://thingspeak.com/channels/2342977/widgets/788872"
                title="Temperature Chart"
              ></iframe>
            )}
          </div>
          <div className={`tab-content ${activeTab === 'contentHumidity' ? 'active' : ''}`}>


            {activeSubTab === 'lineGraph' &&(
              <iframe
                src="https://thingspeak.com/channels/2342977/charts/2?bgcolor=%23ffffff&color=%23d62020&results=60&title=Humidity"
                title="Humidity Chart"
              ></iframe>
            )}


            {activeSubTab === 'digitalData' &&(
              <iframe
                src="https://thingspeak.com/channels/2342977/widgets/788874"
                title="Humidity Chart"
              ></iframe>
            )}


            {activeSubTab === 'analysis' && (
              <iframe
                src="https://thingspeak.com/channels/2342977/widgets/788876"
                title="Humidity Chart"
              ></iframe>
            )}
          </div>


          <div className={`tab-content ${activeTab === 'contentHeatIndex' ? 'active' : ''}`}>
            {activeSubTab === 'lineGraph' &&(
              <iframe
                src="https://thingspeak.com/channels/2342977/charts/3?bgcolor=%23ffffff&color=%23d62020&results=60&title=Heat+Index"
                title="Heat-Index Chart"
              ></iframe>
            )}


            {activeSubTab === 'digitalData' &&(
              <iframe
                src="https://thingspeak.com/channels/2342977/widgets/788877"
                title="Heat-Index Chart"
              ></iframe>
            )}


            {activeSubTab === 'analysis' &&(
              <iframe
                src="https://thingspeak.com/channels/2342977/widgets/788878"
                title="Heat-Index Chart"
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

export default Temperature;
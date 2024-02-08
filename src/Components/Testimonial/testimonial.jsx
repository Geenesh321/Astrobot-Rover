import React from 'react';
import './testimonial.scss';

const Testimonial = () => {
  return (
    <>
      <div className='test_Title'><h1>Components</h1></div>
      
      <div className="test_Container">
        <div className="left-slide">
          <img alt="Logo-Astrobot" src={require("/Astrobot-Rover/Frontend/src/Assets/Testimonial/l298n.png")} className='slide-image' />
          <div className="content-container">
            <h1>L298N Motor Driver</h1>
            <p>This component controls the movement of motors in robots. It provides the necessary power and control signals to manage motor speed and direction.</p>
            <button className='slide-button'>Read More</button>
          </div>
        </div>

        <div className="left-left-slide">
          <img alt="Logo-Astrobot" src={require("/Astrobot-Rover/Frontend/src/Assets/Testimonial/buck-module.png")} className='slide-image' />
          <div className="content-container">
            <h1>Buck Module</h1>
            <p>This module efficiently regulates voltage levels, ensuring stable power supply to electronic devices. It reduces input voltage to a lower, more usable level.</p>
            <button className='slide-button'>Read More</button>
          </div>
        </div>

        <div className="main-slide">
          <img alt="Logo-Astrobot" src={require("/Astrobot-Rover/Frontend/src/Assets/Testimonial/mega.png")} className='slide-image' />
          <div className="content-container">
            <h1>Arduino Mega</h1>
            <p>This microcontroller board offers extended memory and multiple input/output pins for advanced robotics and automation projects.</p>
            <button className='slide-button'>Read More</button>
          </div>
        </div>

        <div className="right-right-slide">
          <img alt="Logo-Astrobot" src={require("/Astrobot-Rover/Frontend/src/Assets/Testimonial/motor.png")} className='slide-image' />
          <div className="content-container">
            <h1>Motor</h1>
            <p>These components convert electrical energy into mechanical motion, driving the wheels or other moving parts of the robot.</p>
            <button className='slide-button'>Read More</button>
          </div>
        </div>

        <div className="right-slide">
          <img alt="Logo-Astrobot" src={require("/Astrobot-Rover/Frontend/src/Assets/Testimonial/esp32cam.png")} className='slide-image' />
          <div className="content-container">
            <h1>ESP32-CAM</h1>
            <p>This module integrates Wi-Fi and camera capabilities, enabling remote monitoring and control of robots through live video streaming.</p>
            <button className='slide-button'>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

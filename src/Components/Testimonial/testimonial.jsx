import React, { useState, useEffect } from 'react';
import './testimonial.scss';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: require("/Astrobot-Rover/Frontend/src/Assets/Testimonial/l298n.png"),
      title: 'L298N Motor Driver',
      description: 'This component controls the movement of motors in robots. It provides the necessary power and control signals to manage motor speed and direction.',
      link: 'https://www.handsontec.com/dataspecs/L298N%20Motor%20Driver.pdf'
    },
    {
      image: require("/Astrobot-Rover/Frontend/src/Assets/Testimonial/buck-module.png"),
      title: 'Buck Module',
      description: 'This module efficiently regulates voltage levels, ensuring stable power supply to electronic devices. It reduces input voltage to a lower, more usable level.',
      link: 'https://tpelectronic.ir/datasheets/20150123144301750.pdf'
    },
    {
      image: require("/Astrobot-Rover/Frontend/src/Assets/Testimonial/mega.png"),
      title: 'Arduino Mega',
      description: 'This microcontroller board offers extended memory and multiple input/output pins for advanced robotics and automation projects.',
      link: 'https://docs.arduino.cc/resources/datasheets/A000067-datasheet.pdf'
    },
    {
      image: require("/Astrobot-Rover/Frontend/src/Assets/Testimonial/motor.png"),
      title: 'Motor',
      description: 'These components convert electrical energy into mechanical motion, driving the wheels or other moving parts of the robot.',
      link: 'https://www.moog.com/content/dam/moog/literature/MCG/moc23series.pdf'
    },
    {
      image: require("/Astrobot-Rover/Frontend/src/Assets/Testimonial/esp32cam.png"),
      title: 'ESP32-CAM',
      description: 'This module integrates Wi-Fi and camera capabilities, enabling remote monitoring and control of robots through live video streaming.',
      link: 'https://media.digikey.com/pdf/Data%20Sheets/DFRobot%20PDFs/DFR0602_Web.pdf'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className='test_Text'> Components </div>
      <div className='testimonial'>
        <div className="test_Container">

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ transform: `translateX(-${100 * currentSlide}%)` }}
            >
              <img alt={`Slide ${index}`} src={slide.image} className='slide-image' />
              <div className="content-container">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <a href={slide.link} className='slide-button'>Read More</a> 
              </div>
            </div>
          ))}
        </div>
        <div className="tv-stand"></div>
      </div>
    </>
  );
};

export default Testimonial;
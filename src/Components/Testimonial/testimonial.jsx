import React from 'react';
import './testimonial.scss';

const Testimonial = () => {
  return (
    <div className="test_Container">
      <h1>Components</h1>

      <div className="slide">
        <div className="content-container">
          <h1>Slide 1 Heading</h1>
          <p>This is the description for Slide 3. It can be as long as needed.</p>
          <button className='slide-button'>Read More</button>
        </div>
        <img alt="Logo-Astrobot" src={require("/Astrobot-Rover/Frontend/src/Assets/Temperature/Logo.png")} className='slide-image' />
      </div>

      <div className="slide">
        <div className="content-container">
          <h1>Slide 2 Heading</h1>
          <p>This is the description for Slide 3. It can be as long as needed.</p>
          <button className='slide-button'>Read More</button>
        </div>
        <img alt="Logo-Astrobot" src={require("/Astrobot-Rover/Frontend/src/Assets/Temperature/Logo.png")} className='slide-image' />
      </div>

    </div>
  );
};

export default Testimonial;
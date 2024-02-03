import React from 'react';
import NavBar from '../NavBar/bar';
import Footer from '../footer/footer';
import './live.scss';

const LivePage = () => {
  return (
    <div className='livePage'>
      <NavBar />

      <div className='liveBackground'>
        <div className='liveContainer'>
          <img
            alt="Circuit Diagram"
            src={require("/Astrobot-Rover/Frontend/src/Assets/Live/ESP32-Cam.png")}
            className='livePhoto'
          />

          <div className='liveDescription'>
            <h1>Esp32 Cam with Arduino Uno</h1>
            <p>
              The circuit diagram illustrates how to connect an ESP32 camera module to an Arduino UNO for live video streaming from a rover. The ESP32 camera module's GPIO0 pin should be connected to ground when initially uploading the code. After uploading the code, remove the jumper between GPIO0 and ground. Then press the reset button on the ESP32 camera module to begin streaming video. The connection diagram is shown below:
            </p>

            <table className='connectionTable'>
              <thead>
                <tr>
                  <th>Arduino Uno</th>
                  <th>ESP32 Cam</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5V</td>
                  <td>5V</td>
                </tr>
                <tr>
                  <td>GND</td>
                  <td>GND</td>
                </tr>
                <tr>
                  <td>Tx</td>
                  <td>Tx</td>
                </tr>
                <tr>
                  <td>Rx</td>
                  <td>Rx</td>
                </tr>
              </tbody>
            </table>

          </div>

          <a className='watchLiveBtn' href="http://10.50.0.197/">Watch Live</a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LivePage;

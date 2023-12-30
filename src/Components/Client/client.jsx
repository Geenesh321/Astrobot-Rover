import React from 'react';
import './client.scss';

const Client = () => {
    return (
        <div>
            <div className='C_text'>
                <p>Our <span>Client</span></p>
            </div>
            <img
                alt=""
                src={require("/Astrobot-Rover/Frontend/src/Assets/Client/handsake.gif")}
                className="C_handsake"
                loading="lazy"
            />
        </div>
    );
};

export default Client;

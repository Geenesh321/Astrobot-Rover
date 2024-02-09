import React from 'react';
import './loading.scss';

const Loading = () => {
    return (
        <div className="loading_Container">
            <div className="loading_Welcome">
                <p>Welcome to the</p>
                <img alt="Brand" src={require("/Astrobot-Rover/Frontend/src/Assets/Register/brand.png")} />
                <div className="loaderBar"></div>
                 </div>
        </div>
    );
}

export default Loading;
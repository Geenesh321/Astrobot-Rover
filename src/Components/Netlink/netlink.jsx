import React from 'react';
import './netlink.scss';

import NavBar from '../NavBar/bar';
import Footer from '../footer/footer';
import Uploader from './Uploader/Uploader';


const NetLink = () => {
    return (
        <>
            <NavBar />

            <div className="netlink-heading">
                <img alt="Image of IoT" src={require("/Astrobot-Rover/Frontend/src/Assets/Netlink/iot.jpg")} className='IoT' />
                <div className="netlink-content">
                    <h2>Connecting the World</h2>
                    <p>Join our vibrant community of innovators shaping the future of IoT. Explore cutting-edge projects and collaborate with experts from around the globe.</p>
                </div>
            </div>
            <Uploader />
            <Footer />
        </>
    );
};
export default NetLink;

import React from 'react';
import './netlink.scss';

import NavBar from '../NavBar/bar';
import Footer from '../footer/footer';
import Uploader from './Uploader/Uploader';
import Nav from "../Nav/Navigation";

const NetLink = () => {
    return (
        <>
        <Nav />
            <NavBar />
            <div className="netlink-heading">
                <img src={require("../../Assets/Netlink/iot.jpg")} alt="Image of IoT" className='IoT' />
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

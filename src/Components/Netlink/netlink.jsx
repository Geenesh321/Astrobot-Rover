import React, { useState } from 'react';
import './netlink.scss';

import NavBar from '../NavBar/bar';
import Footer from '../footer/footer';
import Popup from '../Popup/popup';

const NetLink = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <>
            <NavBar />









            <div className="netlink-Container">
                <div className="popup-trigger" onClick={togglePopup}>Click here to add content</div>
                {isPopupOpen && <Popup onClose={togglePopup} />}
            </div>






            <Footer />
        </>
    );
};

export default NetLink;
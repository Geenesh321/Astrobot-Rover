import React, { useState } from 'react';
import './Uploader.scss';

import Popup from '../Popup/popup';
import { FaUpload } from 'react-icons/fa';
import Feed from '../Feed/feed';


const Uploader = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <>
            <div className="netlink-page">

                <div className="netlink-container">
                    <Feed />
                    <div className="content-wrapper">
                        <div className="uploader">
                            <FaUpload className="icon" />
                            <div className="net-desc">
                                <p className='upload-title'>Upload a File</p>
                                <p>Select a file to upload from your computer</p>
                            </div>
                            <button className="popup-trigger" onClick={togglePopup}>Choose a File</button>
                        </div>
                        {isPopupOpen && <Popup onClose={togglePopup} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Uploader;

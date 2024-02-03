import React, { useState } from 'react';
import { FiUpload , FiKey  } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import './registration.scss';


const Registration = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        setSelectedFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted', selectedFile);
    };

    return (
        <div className="registration-container">
            <div className="container">
                <img alt="Logo-Astrobot" src={require("/Astrobot-Rover/Frontend/src/Assets/Register/brand.png")} className='brand-logo' />
                <div className="upload-container">
                    <label htmlFor="file-upload" className="upload-button">
                        <i className="icons"><FiUpload /></i>
                        <span className="upload-text">Upload</span>
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        onChange={handleFileChange}
                        className="file-input"
                    />
                </div>

                {previewImage && (
                    <div className="image-preview">
                        <img src={previewImage} alt="Preview" />
                    </div>
                )}

                <form className="registration-form" onSubmit={handleSubmit}>
                    <h2>Create your account</h2>
                    <p>“It’s never too late to get good at something.”</p>
                    <h5> ~ Guy Fieri</h5>

                    <div className="input-group animated-input">
                        <FaRegUser className="input-icon" />
                        <input type="text" placeholder="Full Name" required />
                    </div>
                    <div className="input-group animated-input">
                        <MdOutlineMail className="input-icon" />
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="input-group animated-input">
                        <FiKey className="input-icon" />
                        <input type="password" placeholder="Password" required />
                    </div>

                    <div className="checkbox-group">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">I agree to the Terms and Conditions</label>
                    </div>
                    <button type="submit">Register</button>
                    <div className="login-link">
                        Already have an account? <a href="/login">Log In</a>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Registration;

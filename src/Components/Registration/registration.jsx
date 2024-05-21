import React, { useState } from 'react';
import { FiUpload, FiKey } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import './registration.scss';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const navigate = useNavigate();

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

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value); 
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('fullName', fullName);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('avatar', selectedFile);

            // Send registration data to the server
            const response = await axios.post('http://127.0.0.1:8000/user/api/signup/', formData);

            // Display success alert
            if (response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: 'Your account has been created successfully!',
                });

                setFullName('');
                setEmail('');
                setPassword('');
                setSelectedFile(null);
                setPreviewImage(null);
                navigate('/');
            } else if (response.status === 226) {
                Swal.fire({
                    icon: 'error',
                    title: 'User already exists',
                    text: 'Please enter a different email!',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong',
                    text: 'Please try again later!',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: 'Failed to register. Please try again later.',
            });

            console.error('Registration failed:', error);
        }
    };

    const handleLoginClick = () => {
        navigate('/');
    };

    return (
        <div className="registration-container">
            <div className="container">
                <img alt="Logo-Astrobot" src={require("../..//Assets/Register/brand.png")} className='brand-logo' />
                <div className={`upload-container ${previewImage ? 'has-image' : ''}`}>
                    <label htmlFor="file-upload" className="upload-button">
                        <i className="icons"><FiUpload /></i>
                        <span className="upload-text">Upload</span>
                        {previewImage && (
                            <img src={previewImage} alt="Preview" className="image-preview" />
                        )}
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        onChange={handleFileChange}
                        className="file-input"
                    />
                </div>

                <form className="registration-form" onSubmit={handleFormSubmit}>
                    <h2>Create your account</h2>
                    <p>“It’s never too late to get good at something.”</p>
                    <h5> ~ Guy Fieri</h5>

                    <div className="input-group animated-input">
                        <FaRegUser className="input-icon" />
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group animated-input">
                        <MdOutlineMail className="input-icon" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group animated-input">
                        <FiKey className="input-icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                    <div className="login-link">
                        Already have an account? <a onClick={handleLoginClick}>Log In</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;

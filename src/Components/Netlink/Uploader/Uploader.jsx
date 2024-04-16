import React, { useEffect, useState } from 'react';
import './Uploader.scss';

import Popup from '../Popup/popup';
import { FaUpload } from 'react-icons/fa';
import Feed from '../Feed/feed';
import Post from '../Post/post';
import axios from 'axios';


const Uploader = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };




    const [posts, setPosts] = useState(null)
    const fetchPosts = async () => {
        const accessToken = localStorage.getItem('token') || null

        if (accessToken) {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/netlink/posts/`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });

                if (response.status === 200) { // Assuming 200 is the status for a successful request
                    const data = response.data;
                    setPosts(data);
                    console.log("The posts are: ", data);
                } else {
                    console.error('Error fetching posts:', response.statusText);
                    // Handle error state as needed
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
                // Handle error state as needed
            }
        } else {
            console.error('Access token not found in local storage.');
        }
    };

    useEffect(() => {
        fetchPosts()
    }, [])

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
                        {isPopupOpen && <Popup onClose={togglePopup} fetchPosts={fetchPosts} />}
                    </div>




                </div>
                <Post posts={posts} />
            </div>
        </>
    );
};

export default Uploader;

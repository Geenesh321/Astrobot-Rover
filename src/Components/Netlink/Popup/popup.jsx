import React, { useState } from 'react';
import './popup.scss';
import swal from 'sweetalert2';
import axios from 'axios';

const Popup = ({ onClose, fetchPosts }) => {
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [photos, setPhotos] = useState([]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const handlePhotoChange = (event) => {
        const selectedPhotos = Array.from(event.target.files);
        setPhotos(selectedPhotos);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        onClose();
        console.log('The title is: ', title)
        console.log('The Text is : ', question)
        console.log('The Image is : ', photos[0])


        const postData = new FormData();
        postData.append('title', title);
        postData.append('content', question);
        postData.append('image', photos[0]);


        try {
            const response = await axios.post(`http://127.0.0.1:8000/netlink/posts/`, postData, {
                headers: {
                    // 'Content-Type': 'application/json',  // Remove this line when using FormData
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (response.status === 201) {
                const responseData = response.data;
                console.log('Post added successfully:', responseData);
                fetchPosts()
                swal.fire({
                    title: "Post Uploaded Successfully.",
                    icon: "success",
                    toast: true,
                    timer: 3000,
                    position: "top-right",
                    timerProgressBar: true,
                    showConfirmButton: false,
                    showCloseButton: true,
                });
                
            } else {
                console.error('Error adding post:', response.statusText);
                swal.fire({
                    // title: "Please add some content description.",
                    title: response.status,
                    icon: "warning",
                    toast: true,
                    timer: 3000,
                    position: "top-right",
                    timerProgressBar: true,
                    showConfirmButton: false,
                    showCloseButton: true,
                });
            }
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Add Content</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} className="form-input" />
                    <textarea placeholder="Project Description" value={question} onChange={handleQuestionChange}></textarea>
                    <input type="file" accept="image/*" onChange={handlePhotoChange} multiple 
                    
                    
                    />
                    <div className="photo-previews">
                        {photos.map((photo, index) => (
                            <img key={index} src={URL.createObjectURL(photo)} alt={`Photo ${index}`} />
                        ))}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Popup;

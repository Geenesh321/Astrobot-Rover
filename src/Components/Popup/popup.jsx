import React, { useState } from 'react';
import './popup.scss';

const Popup = ({ onClose }) => {
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const handlePhotoChange = (event) => {
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onClose(); 
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Add Content</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
                    <textarea placeholder="Question" value={question} onChange={handleQuestionChange}></textarea>
                    <input type="file" accept="image/*" onChange={handlePhotoChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Popup;

import React from 'react';
import './post.scss';

const Post = () => {
    return (
        <div className="post">

            <div className="post-container">
                <div className="user-info">
                    <div className="user-image"></div>
                    <div className="user-name">Geenesh Acharya</div>
                </div>
                <div className="content">
                    <form>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Title of Project"
                        />
                        <textarea
                            className="input-field"
                            placeholder="Project Description"
                        ></textarea>
                        <div className="photo-container">
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Post;

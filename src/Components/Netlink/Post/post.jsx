import React, { useEffect, useState } from 'react';
import './post.scss';
import axios from 'axios';
import { RxCross2 } from "react-icons/rx";
const Post = ({posts}) => {

    



    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState([])
    const [currentPost, setCurrentPost] = useState()
    const handleShowComments = async (post_id) => {
        setShowComments(true)
        setCurrentPost(post_id)
        console.log(post_id)
        try {
            const response = await axios.get(`http://127.0.0.1:8000/netlink/post/${post_id}/comments/`);
            setComments(response.data);
            console.log('comments are: ', response.data)
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    }


    const [commentText, setCommentText] = useState('')
    const addComment = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://127.0.0.1:8000/netlink/post/${currentPost}/comment/`, {
                text: commentText
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (response.status === 201) { // Assuming 200 is the status for a successful request
                const data = response.data;
                console.log('response is : ', data)
                setCommentText('')
                handleShowComments(currentPost)
            } else {
                console.error('Error fetching posts:', response.statusText);
                // Handle error state as needed
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
            // Handle error state as needed
        }
    }
    return (
        <div className="post-main-container">
            {posts && posts.map((post) => {
                return (
                    <div className="post">
                        <div className="post-container">
                            <div className="user-info">
                                <div className="user-image">
                                    <img src={post.user.profile} alt="" />
                                </div>
                                <div className="user-name">{post.user.full_name}</div>
                            </div>
                            <div className="content">
                                <form>
                                    <h4>{post.title}</h4>
                                    <p>{post.content}</p>
                                    <div className="photo-container">
                                        <img src={post.image} alt="" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <button onClick={() => handleShowComments(post.id)}>Comments</button>
                    </div>
                )
            })}


            <div className={`comment-container ${showComments ? 'active' : ''}`}>
                <div className="top">
                    <h2>Comments</h2>
                    <span onClick={() => setShowComments(false)}><RxCross2 /></span>
                </div>

                <div className="comments">
                    {comments.length > 0 ? comments.map(comment => {
                        return (
                            <div className="comment">
                                <div className="image">
                                    <img src={'http://127.0.0.1:8000'+comment.user.profile} alt="" />
                                </div>
                                <div className="text-container">
                                    <h6>{comment.user.full_name}</h6>
                                    <p>{comment.text}</p>
                                </div>
                            </div>
                        )
                    })
                        :
                        <p>No comments</p>
                    }
                </div>

                <form action="" className="add-comment" onSubmit={addComment}>
                    <textarea name="" id="" cols="30" rows="10" value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder='Add Comment'></textarea>

                    <button type='submit'>Add</button>
                </form>
            </div>

        </div>
    );
};

export default Post;

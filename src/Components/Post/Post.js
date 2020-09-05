import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {title, id} = props.post;
    const postStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        width:'40%',
        float:'inline-end'
    }
    return (
        <div style={postStyle}>
            <h3>"{title}"</h3>
            <Link to={`/posts/${id}`}><button>Details</button></Link>
        </div>
    );
};

export default Post;
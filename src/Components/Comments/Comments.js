import React from 'react';

const Comment = (props) => {
    const {name, body, image} = props.comment;
    return (
        <div>
            <img src={image} alt=""/>
            <h5>Name: {name}</h5>
            <h6>{body}</h6>
        </div>
    );
};

export default Comment;
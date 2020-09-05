import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments'

const PostDetail = () => {
    const [detail, setDetail] = useState({})
    const [comments,setComments] = useState([]);
    const {postId} = useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setDetail(data))
    },[]);

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    },[])

    for(let i = 0; i<comments.length ;i++){
        const random = Math.floor(Math.random() * 100 + 1);
        comments[i].image = `https://randomuser.me/api/portraits/thumb/men/${random}.jpg`;
    }
    return (
        <div>
            <div>

                <strong>"{detail.title}" </strong>
                <p>Description: {detail.body}</p>
            </div>
            <div>
            <h4>Comments: ({comments.length})</h4>

                {
                    comments.map(comment => <Comments comment={comment}></Comments>)
                }
            </div>

        </div>
    );
};

export default PostDetail;
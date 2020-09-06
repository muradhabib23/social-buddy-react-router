import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments'
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


const PostDetail = () => {
    const classes = useStyles();
    const [detail, setDetail] = useState({})
    const [comments, setComments] = useState([]);
    const { postId } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, []);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    for (let i = 0; i < comments.length; i++) {
        const random = Math.floor(Math.random() * 100 + 1);
        comments[i].image = `https://randomuser.me/api/portraits/thumb/men/${random}.jpg`;
    }
    const postDetailStyle = {
        marginTop: '75px',
        width: '50%',
        marginLeft: '320px',
        marginBottom: '50px',
    }
    return (
        <div>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography style={postDetailStyle} className={classes.title} gutterBottom>
                        <h3>"{detail.title}"</h3>
                        <p><strong style={{ fontSize: '15px' }}>Description:</strong> {detail.body}</p>
                    </Typography>
                </CardContent>
            </Card>
            <h4 style={{ marginLeft: '20px' }}>Comments: ({comments.length})</h4>
            <div>
                {
                    comments.map(comment => <Comments comment={comment}></Comments>)
                }
            </div>

        </div>
    );
};

export default PostDetail;
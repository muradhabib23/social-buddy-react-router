import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const Post = (props) => {
    const classes = useStyles();
    const { title, id, image } = props.post;
    const postStyle = {
        marginTop: '40px',
        width: '40%',
        height: '275px',
        display: 'inline-block',
        marginLeft: '80px',
        borderBottom: '5px solid #2980B9',
        boxShadow: '5px 5px 10px gray'

    }
    const imgStyle = {
        width: '20%',
        borderRadius:'50%'
    }
    return (
        <Card style={postStyle} className={classes.root} variant="outlined">
            <CardContent>
                <img style={imgStyle} src={image} alt=""/>
                <Typography className={classes.title} gutterBottom>
                    <h3>"{title}"</h3>
                </Typography>
            </CardContent>
           <div>
           <CardActions>
                <Link style={{ textDecoration: 'none', paddingLeft: '10px' }} to={`/posts/${id}`}>
                    <Button variant="contained" color="primary"> Details
            </Button></Link>
            </CardActions>
           </div>
        </Card>
    );
};

export default Post;
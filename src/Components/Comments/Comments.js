import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  }));
  
  
const Comment = (props) => {
    const {name, body, image} = props.comment;
    const classes = useStyles();
    const commentStyle = {
          width:'50%', 
          display:'flex', 
          marginLeft:'20px',
          marginBottom:'10px', 
          backgroundColor:'white', 
          boxShadow:'2px 2px 10px gray',
          borderRadius:'10px'
        }

    return (
        <div style={commentStyle}>
             <Avatar style={{marginTop:'28px', marginLeft:'20px'}} alt="" src={image} className={classes.large} />
             <div style={{marginLeft:'20px', paddingBottom:'25px'}}>
                <h5>Name: {name}</h5>
                <small>{body}</small>
             </div>
        </div>
    );
};

export default Comment;
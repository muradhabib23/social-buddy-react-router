import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([])

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  for(let i = 0; i<posts.length ;i++){
    const random = Math.floor(Math.random() * 100 + 1);
    posts[i].image = `https://randomuser.me/api/portraits/med/men/${random}.jpg`;
}
    return (
        
        <div >
                {
                    posts.map(post=><Post post={post}></Post>)
                }
        </div>
    );
};

export default Home;
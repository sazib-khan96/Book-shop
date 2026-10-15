import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../../Components/Post/Post';


const Blog = () => {
    const postsData = useLoaderData()
    const posts = postsData.data.posts
   
    return (
        <div>
            {
                posts.map(blog => <Post blog={blog} key={blog.id}></Post>)
            }
        </div>
    );
};

export default Blog;
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';


const EveryPost = () => {
    const navigate = useNavigate()
    const navigateHandle =() => {
        navigate(-1)
    }
    const everyPost = useLoaderData()
    const {body,title} = everyPost.data

    return (
        <div className='w-6xl mx-auto p-5 '>
            <h1 className='text-2xl my-5'>{title}</h1>
            <p>{body}</p>

            <button onClick={navigateHandle} className='my-btn mt-5'> Go Back</button>
        </div>
    );
};

export default EveryPost;
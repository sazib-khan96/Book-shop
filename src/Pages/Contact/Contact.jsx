import React from 'react';
import { useLoaderData } from 'react-router';

const Contact = () => {
    const users = useLoaderData()
   console.log(users)
    return (
        <div>
        {
            users.map(user => <li>{user.title}</li>)
        }
        </div>
    );
};

export default Contact;
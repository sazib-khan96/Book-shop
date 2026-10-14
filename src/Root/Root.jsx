import React from 'react';
import Menu from '../Components/Menu/Menu';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto p-3'>
            <Menu></Menu>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
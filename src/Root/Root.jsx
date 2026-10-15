import React from 'react';
import NavMenu from '../Components/Menu/NavMenu'
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-8xl mx-auto p-3'>
            <NavMenu></NavMenu>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
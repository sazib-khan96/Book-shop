import React from 'react';
import { NavLink } from 'react-router';


const Links = ({link}) => {
    return (
        <div>
            <ul>
                <NavLink to={link.path}>{link.name}</NavLink>
                 
            </ul>
        </div>
    );
};

export default Links;
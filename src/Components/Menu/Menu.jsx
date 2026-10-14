import React from 'react';
import { NavLink } from 'react-router';

const Links = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Products",
    path: "/products"
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact"
  },
  
];




const Menu = () => {
    return (
        <header>
            <nav >
              <ul className='flex gap-3 justify-center items-center'>
                {Links.map(link => <NavLink to={link.path}>{link.name}</NavLink>)}
              </ul>
            </nav>
        </header>
    );
};

export default Menu;
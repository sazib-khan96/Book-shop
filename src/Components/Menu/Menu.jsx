import React from 'react';
import { NavLink } from 'react-router';
import Links from '../Links/Links';

const LinksItems = [
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
  const menu = LinksItems.map(link => <Links link={link} key={link.id}></Links>)
    return (
        <header>
            <nav >
              <ul className='flex gap-3 justify-center items-center'>
                 {
                    menu
                }
              </ul>
            </nav>
        </header>
    );
};

export default Menu;
import React, { useState } from "react";
import Links from "../Links/Links";
import { X, Menu } from "lucide-react";

const LinksItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Products",
    path: "/products",
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
  },
];

const NavMenu = () => {
  const menu = LinksItems.map((link) => (
    <Links link={link} key={link.id}></Links>
  ));

  const [open, setOpen] = useState(false);
  return (
    <header>
      <span onClick={() => setOpen(!open)} className="flex md:hidden">
        {open ? <X></X> : <Menu></Menu>}
        Menu
      </span>


      {/* desktop version  */}
      <nav className="hidden md:flex justify-center">
        <ul className="flex gap-3 justify-center items-center">{menu}</ul>
      </nav>
    </header>
  );
};

export default NavMenu;

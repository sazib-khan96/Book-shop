import React, { useState } from "react";
import Links from "../Links/Links";
import { X, Menu, Mail, Phone } from "lucide-react";

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

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <span onClick={() => setOpen(!open)} className="flex md:hidden">
        {open ? <X></X> : <Menu></Menu>}
        Menu
      </span>

      {/* desktop version  */}
      <div className="bg-amber-400">
        <marquee behavior="" direction="left">
          🎉 Welcome to Our Shop! | 🛍️ Discover Amazing Products | ✨ Best
          Quality at Best Prices!
        </marquee>
      </div>
      <nav className="hidden md:flex justify-center p-5 bg-amber-500 shadow-3xl">
        <ul className="flex gap-3 justify-center items-center">{menu}</ul>
      </nav>
      {/* mobile version  */}
      <nav
        className={`fixed -left-full duration-300 bg-amber-200 pr-8 pl-2 py-8 w-[300px] h-screen rounded-r-2xl shadow-2xl ${open ? "left-0" : ""}  md:hidden`}
      >
        <X
          onClick={closeMenu}
          className="absolute right-5 top-5 text-red-400"
        ></X>
        <h1 className="text-center text-3xl">Book Vive</h1>
        <input
          className="border border-amber-50 p-3 w-full rounded-xl my-5 bg-amber-50"
          type="text"
          placeholder="Search Product"
        />
        <ul>{menu}</ul>

        <div className="fixed bottom-20 space-y-3">
          <h2 className="text-xl">Follow Us</h2>
          <li className="flex gap-2">
            <Mail /> demo.2gmail.com
          </li>
          <li className="flex gap-2">
            <Phone /> 016584258
          </li>
          <li className="flex gap-2">
            <Mail /> demo.2gmail.com
          </li>
        </div>
      </nav>
    </header>
  );
};

export default NavMenu;

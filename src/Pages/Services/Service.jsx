import React from "react";
import { Outlet, NavLink } from "react-router";
import Elementor from "./../../Components/Elementor/Elementor";

const Service = () => {
  return (
    <div className="flex gap-5">
      <div className="w-[200px] border">
        <ul className="flex gap-3 flex-col">
            <NavLink to="wordpress">Wordpress</NavLink>
            <NavLink to="elementor">Elementor</NavLink>
        </ul>
      </div>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Service;

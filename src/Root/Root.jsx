import React from "react";
import NavMenu from "../Components/Menu/NavMenu";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-8xl mx-auto p-3">
      <NavMenu></NavMenu>
      <ToastContainer
       position="top-right" 
       autoClose={2000} 
       theme="light" 
       />

      <main>
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Root;

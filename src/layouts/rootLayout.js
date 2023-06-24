import React from "react";
import Navbar from "../components/common/navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

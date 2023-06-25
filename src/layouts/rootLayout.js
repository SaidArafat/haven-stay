import React from "react";
import Navbar from "../components/common/navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./../components/footer";

const RootLayout = () => {
  const location = useLocation();

  const shouldDisplayFooter = !(
    location.pathname.includes("signin") || location.pathname.includes("signup")
  );

  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      {shouldDisplayFooter && <Footer />}
    </>
  );
};

export default RootLayout;

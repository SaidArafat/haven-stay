import React from "react";
import { NavLink } from "react-router-dom";
import ButtonOutline from "./buttons/buttonOutline";

const Navbar = () => {
  const links = [
    { path: "booking", label: "booking" },
    { path: "facilities", label: "facilities" },
    { path: "support", label: "support" },
    { path: "rooms", label: "rooms" },
    { path: "Reviews", label: "Reviews" },
    { path: "Blog", label: "blog" },
  ];

  const renderedLinks = links.map((link, index) => {
    return (
      <li className="nav-item" key={index}>
        <NavLink className="nav-link text-capitalize" to={`/${link.path}`}>
          {link.label}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand-lg container">
      <div className="container-fluid fw-medium">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          <span className="bg-dark text-white px-2 me-1 rounded-circle">H</span>
          otel
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {renderedLinks}
            <li className="nav-item">
              <div className="nav-link">
                <ButtonOutline link="/signin">Sign in</ButtonOutline>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

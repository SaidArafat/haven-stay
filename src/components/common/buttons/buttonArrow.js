import React from "react";
import { Link } from "react-router-dom";

const ButtonArrow = ({ link, children, onClick, theme }) => {
  const dark = theme === "dark" ? "bg-black text-white" : "";

  if (link) {
    return (
      <Link
        className={`me-2 rounded-circle px-3 py-2 border-0 ${dark}`}
        to={link}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`me-2 rounded-circle px-3 py-2 border-0 ${dark}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonArrow;

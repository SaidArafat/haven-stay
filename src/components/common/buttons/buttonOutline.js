import React from "react";
import { Link } from "react-router-dom";

const ButtonOutline = ({ link, children, onClick }) => {
  if (link) {
    return (
      <Link className="button button--outline text-decoration-none" to={link}>
        {children}
      </Link>
    );
  }

  return (
    <button className="button button--outline" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonOutline;

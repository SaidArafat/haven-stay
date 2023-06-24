import React from "react";

const Icon = ({ link, icon, children }) => {
  if (link) {
    return (
      <a
        className="icon--social icon"
        href={`https://${link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={icon}></i>
      </a>
    );
  }

  return (
    <div className="icon">
      <i className={`${icon} icon-facility`}></i>
      <span className="d-block mt-2 text-capitalize fw-semibold">
        {children}
      </span>
    </div>
  );
};

export default Icon;

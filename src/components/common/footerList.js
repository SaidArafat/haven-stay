import React, { useState } from "react";
import { Link } from "react-router-dom";

const FooterList = ({ title, items }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="col-md-3 text-center text-md-start">
      <header
        className="collapsible__header px-2 px-sm-0 c-pointer"
        onClick={handleClick}
      >
        <h4 className="fs-5 fw-semibold text-capitalize">{title}</h4>
        <i
          className={`fa-solid fa-chevron-down d-md-none ${
            isExpanded ? "" : "fa-rotate-90"
          }`}
        ></i>
      </header>
      <ul
        className={`list-unstyled collapsible__content  ${
          isExpanded ? "collapsible--expanded" : ""
        }`}
      >
        {items.map((item, index) => (
          <li key={index} className="opacity-75 text-capitalize mt-2">
            <Link to={`/${item.replace(/\s+/g, "-")}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterList;

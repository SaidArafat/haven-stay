import React from "react";
import ButtonOutline from "./buttons/buttonOutline";

const Feature = ({ feature }) => {
  return (
    <>
      <div className="col-md-6">
        <img
          src={feature.image}
          className="img-fluid rounded-5"
          alt={feature.title}
        />
      </div>
      <div className="col-md-6 text-center text-md-start">
        <h4 className="text-capitalize fw-medium fs-3">{feature.title}</h4>
        <p className="my-4">{feature.caption}</p>
        <ButtonOutline link="/">Visit Now</ButtonOutline>
      </div>
    </>
  );
};

export default Feature;

// link={`/${feature.title.replace(/\s+/g, "-")}`}

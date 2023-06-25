import React, { useState } from "react";
import Icon from "./common/icons/icon";
import Joi from "joi";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const schema = Joi.string()
    .email({ tlds: { allow: ["com", "net", "org"] } })
    .label("Email");

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    const { error } = schema.validate(inputValue);
    setError(error ? error.details[0].message : "");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { error } = schema.validate(email);
    setError(error ? error.details[0].message : "");

    if (!error) {
      console.log(email);
    }
  };

  const facilities = [
    { icon: "fa-brands fa-airbnb", name: "private workspace" },
    { icon: "fa-brands fa-cc-paypal", name: "outdoor workspace" },
    { icon: "fa-brands fa-cc-visa", name: "swimming pool" },
    { icon: "fa-brands fa-amazon-pay", name: "parking area" },
    { icon: "fa-brands fa-uber", name: "Free wifi" },
    { icon: "fa-brands fa-windows", name: "Breakfast" },
    { icon: "fa-brands fa-slack", name: "Breakfast" },
  ];

  const renderedFacilities = facilities.map((item, index) => (
    <div className="col-md-4 col-sm-6 text-center" key={index}>
      <Icon icon={item.icon}></Icon>
    </div>
  ));

  return (
    <section className="subscribe p-5 rounded-5 text-center mt-5">
      <div className="row g-5 p-3 justify-content-center">
        {renderedFacilities}
      </div>

      <div className="d-flex justify-content-center flex-column align-items-center">
        <h3 className="fs-2 fw-semibold my-4">
          Subscribe & get special discount
        </h3>
        <p className="w-50">
          Don't miss something? Subscribe right now and get the special discount
          and monthly newsletter
        </p>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="mt-5 bg-white shadow-sm d-flex justify-content-between rounded-5 overflow-hidden col-md-8 mx-auto">
          <input
            className="input"
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Enter your Email Address"
          />
          <button className="button button--dark">Subscribe</button>
        </div>
        {error && <p className="text-danger my-2">{error}</p>}
      </form>
    </section>
  );
};

export default Subscribe;

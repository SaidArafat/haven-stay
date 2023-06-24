import React, { useState } from "react";
import Input from "./common/input";
import Joi from "joi";
import { validate } from "../utils/validation";

const Hero = () => {
  const [search, setSearch] = useState({
    checkIn: "",
    checkOut: "",
  });

  const [errors, setErrors] = useState({});

  const searchSchema = Joi.object({
    checkIn: Joi.date().required().label("Check in"),
    checkOut: Joi.date().required().label("Check out"),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSearch((prevSearch) => ({
      ...prevSearch,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const errors = validate(search, searchSchema);
    setErrors(errors || {});
    if (!errors) {
      console.log(search);
    }
  };

  return (
    <section>
      <div className="home rounded-5 mt-3 p-5">
        <div className="w-75 mx-auto">
          <h1 className="fw-bold">
            Find suitable room in H. Otel, Just search here
          </h1>
          <p className="mt-5 fw-medium opacity-75">
            The right property for you. big range top-rated properties. Price
            guarantee.
          </p>
        </div>
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="home__bar w-75 mx-auto d-flex justify-content-between align-items-center bg-white rounded-5 overflow-hidden flex-column flex-lg-row pt-2 p-md-0"
      >
        <Input
          label="Check in"
          type="datetime-local"
          name="checkIn"
          value={search.checkIn}
          error={errors.checkIn}
          onChange={handleInputChange}
        />
        <Input
          label="Check out"
          type="datetime-local"
          name="checkOut"
          value={search.checkOut}
          error={errors.checkOut}
          onChange={handleInputChange}
        />
        <button className="p-4 border-0 bg-dark text-white button--search">
          <i className="fa-solid fa-magnifying-glass me-3 fa-xl"></i>Search
        </button>
      </form>
    </section>
  );
};

export default Hero;

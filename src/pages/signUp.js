import React, { useState } from "react";
import Input from "../components/common/input";
import ButtonOutline from "../components/common/buttons/buttonOutline";
import { Link } from "react-router-dom";
import { validateProperty, validate } from "../utils/validation";
import Joi from "joi";

const SignUp = () => {
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  const accountSchema = Joi.object({
    name: Joi.string().min(4).label("Name"),
    email: Joi.string()
      .min(10)
      .email({ tlds: { allow: ["com", "net", "org"] } })
      .required()
      .label("Email"),
    password: Joi.string().min(5).required().label("Password"),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const errorMessage = validateProperty(name, value, accountSchema);

    setErrors((prevError) => ({
      ...prevError,
      [name]: errorMessage,
    }));

    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value,
    }));
  };

  const handleInputReset = () => {
    setAccount({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const errors = validate(account, accountSchema);
    setErrors(errors || {});

    if (!errors) {
      console.log(account);
      handleInputReset();
    }
  };

  return (
    <section className="center bg-secondary-light p-5 rounded-5">
      <h2 className="fw-semibold fs-3 text-center">Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <Input
          label="Name"
          type="text"
          name="name"
          value={account.name}
          onChange={handleInputChange}
          error={errors.name}
          focus={true}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={account.email}
          onChange={handleInputChange}
          error={errors.email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={account.password}
          onChange={handleInputChange}
          error={errors.password}
        />

        <ButtonOutline>Sign Up</ButtonOutline>
      </form>
      <div className="text-center">
        <span className="me-1 opacity-75">Have an account already?</span>
        <Link className="text-decoration-none" to="/signin">
          Sign In
        </Link>
      </div>
    </section>
  );
};

export default SignUp;

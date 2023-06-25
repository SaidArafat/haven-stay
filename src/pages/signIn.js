import React, { useState } from "react";
import Input from "../components/common/input";
import ButtonOutline from "../components/common/buttons/buttonOutline";
import { Link } from "react-router-dom";
import Joi from "joi";

const SignIn = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");

  const accountSchema = Joi.object({
    email: Joi.string()
      .min(10)
      .email({ tlds: { allow: ["com", "net", "org"] } })
      .required()
      .label("Email"),
    password: Joi.string().min(5).required().label("Password"),
  });

  const validateAccount = (account) => {
    const options = { abortEarly: false };
    const { error } = accountSchema.validate(account, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = (name, value) => {
    const schema = Joi.object({
      [name]: accountSchema.extract(name),
    });

    const { error } = schema.validate({ [name]: value });
    return error ? error.details[0].message : null;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const errorMessage = validateProperty(name, value);

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
      email: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const errors = validateAccount(account);
    setErrors(errors || {});
    if (!errors) {
      console.log(account);
      handleInputReset();
    }
  };

  return (
    <section className="center bg-secondary-light p-5 rounded-5">
      <h2 className="fw-semibold fs-3 text-center">Sign In</h2>
      <form onSubmit={handleFormSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          value={account.email}
          onChange={handleInputChange}
          error={errors.email}
          focus={true}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={account.password}
          onChange={handleInputChange}
          error={errors.password}
        />

        <ButtonOutline>Sign in</ButtonOutline>
      </form>
      <div className=" text-center">
        <Link className="d-block" to="/forgot-password">
          Forgot password?
        </Link>
        <span className="me-1 opacity-75">Don't have an account?</span>
        <Link className=" fw-medium" to="/signup">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default SignIn;

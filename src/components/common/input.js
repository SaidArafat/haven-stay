import React from "react";

const Input = ({
  label,
  value,
  name,
  type,
  onChange,
  error,
  focus = false,
}) => {
  if (type === "date" || type === "datetime-local")
    return (
      <div className="opacity-75">
        <div className="form-group d-flex justify-content-center flex-column flex-md-row align-items-center px-3">
          <input
            className="input--check c-pointer d-block"
            id={label}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
          />
          <label className="d-block ms-2 bar__item" htmlFor={label}>
            {label}
          </label>
        </div>
        {error && (
          <div className="text-danger opacity-100 text-center">{error}</div>
        )}
      </div>
    );

  return (
    <div className="my-4">
      <label className="d-block" htmlFor={label}>
        {label}
      </label>
      <input
        className="input p-2 px-3 rounded-1"
        id={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoFocus={focus}
      />
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default Input;

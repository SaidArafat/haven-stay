import Joi from "joi";

export const validate = (input, schema) => {
  const options = { abortEarly: false };
  const { error } = schema.validate(input, options);

  if (!error) return null;

  const errors = {};
  for (let item of error.details) errors[item.path[0]] = item.message;
  return errors;
};

export const validateProperty = (name, value, schema) => {
  const propertySchema = Joi.object({
    [name]: schema.extract(name),
  });

  const { error } = propertySchema.validate({ [name]: value });
  return error ? error.details[0].message : null;
};

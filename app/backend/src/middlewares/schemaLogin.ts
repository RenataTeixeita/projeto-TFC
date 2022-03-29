import Joi = require('joi');

const message = 'All fields must be filled';

const schemaLogin = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': message,
    'string.email': message,
  }),
  passwordInput: Joi.string().min(6).required().messages({
    'any.required': message,
  }),
});

export default schemaLogin;

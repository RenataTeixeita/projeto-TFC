import Joi = require('joi');

const schemaLogin = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'All fields must be filled',
  }),
  passwordInput: Joi.string().min(6).required().messages({
    'any.required': 'All fields must be filled',
  }),
});

export default schemaLogin;

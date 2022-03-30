import Joi = require('joi');
import { LoginInput } from '../interfaces/UsersInterface';

const message = 'All fields must be filled';
const emailError = 'Incorrect email or password';

const schemaLogin = Joi.object({
  email: Joi.string().email().required().messages({
    'email.base': emailError,
    'string.email': emailError,
    'any.required': message,
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': message,
  }),
});

export default (obj: LoginInput) => schemaLogin.validate(obj);

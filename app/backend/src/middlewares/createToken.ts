import jwt = require('jsonwebtoken');
import fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const createToken = (payload: object) => {
  const jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

export default createToken;

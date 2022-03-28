import { Request, Response, NextFunction } from 'express';
import jwt = require('jsonwebtoken');
import fs = require('fs');
import Users from '../database/models/Users';

const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(authorization, secret);
    if (typeof (decoded) === 'string') {
      console.log(decoded);
    } else {
      const user = await Users.findOne({ where: { email: decoded.email } });
      if (!user) {
        return next(res.status(401).json({ message: 'User does not exist' }));
      }
    }
    next();
  } catch (err) {
    return next(res.status(401).json({ message: 'Expired or invalid token' }));
  }
};

export default { validateToken };

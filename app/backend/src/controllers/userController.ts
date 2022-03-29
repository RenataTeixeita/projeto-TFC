import { Request, Response } from 'express';
import UserService from '../services/UserService';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const makeLogin = await UserService.login(email, password);
  if (typeof (makeLogin) === 'string') {
    return res.status(401).json({ message: makeLogin });
  }
  return res.status(200).json(makeLogin);
};

export default { login };

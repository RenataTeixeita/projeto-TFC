// import { Request, Response } from 'express';
// import UserService from '../services/UserService';

// const login = async (req: Request, res: Response) => {
//   const { email, password } = req.body;
//   const makeLogin = await UserService.login(email, password);
//   if (makeLogin) {
//     return res.status(makeLogin.status).json({ message: makeLogin.message });
//   }
//   const { token } = makeLogin;
//   return res.status(makeLogin.status).json({ token });
// };

// export default { login };

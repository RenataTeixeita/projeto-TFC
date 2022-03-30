import bcryptjs = require('bcryptjs');
import { UserI } from '../interfaces/UsersInterface';
import Users from '../database/models/Users';
import createToken from '../middlewares/createToken';
import verifyLogin from '../middlewares/verifyLogin';

const login = async (email: string, password: string) => {
  const correctLogin = await verifyLogin(email, password);
  if (correctLogin) return correctLogin;

  const userSearch = await Users.findOne({ where: { email } });

  if (userSearch === null) {
    return 'Incorrect email or password';
  }

  const validPassword = bcryptjs.compareSync(password, userSearch.password);
  if (validPassword === false) {
    return 'Incorrect email or password';
  }

  const { id, username, role } = userSearch as unknown as UserI;

  const token = createToken({ email, id, username, role });
  const result = {
    user: { id, username, role, email },
    token,
  };
  return result;
};

export default { login };

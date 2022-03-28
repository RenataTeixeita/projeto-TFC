import { UserI } from '../interfaces/UsersInterface';
import Users from '../database/models/Users';
import createToken from '../middlewares/createToken';
import schemaLogin from '../middlewares/schemaLogin';
// import { UserI } from 'src/interfaces/UsersInterface';
// import { LoginOutput } from '../interfaces/UsersInterface';

const login = async (email: string, password: string) => {
  const userSearch = await Users.findOne({ where: { email } });
  const { id, username, role } = userSearch as unknown as UserI;
  if (!userSearch) return 'Incorrect email or password';
  // if (!userSearch) return { status: 401, message: 'Incorrect email or password' };
  try {
    const { error } = schemaLogin.validate({ email, password });
    // if (error) return { status: 401, message: error.details[0].message };
    if (error) return error.details[0].message;
    // const userSearch = await Users.findOne({ where: { email } });
    console.log('user: ', userSearch);
    // if (userSearch.password ==!password) {
    //   return { status: 401, message: 'Incorrect email or password' }
    // };
  } catch (err) {
    console.log(err);
  }
  const token = createToken({ email, id, username, role });
  const result = {
    user: { id, username, role, email },
    token,
  };
  console.log('result: ', result);
  return result;
};

export default { login };

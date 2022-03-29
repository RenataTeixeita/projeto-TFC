import { UserI } from '../interfaces/UsersInterface';
// import { UserFullData } from '../interfaces/UsersInterface';
import Users from '../database/models/Users';
import createToken from '../middlewares/createToken';
import schemaLogin from '../middlewares/schemaLogin';

const login = async (email: string, passwordInput: string) => {
  try {
    const { error } = schemaLogin.validate({ email, passwordInput });
    if (error) return error.details[0].message;
    // if (userSearch.password ==!password) return 'Incorrect email or password';
  } catch (err) {
    console.log(err);
  }

  const userSearch = await Users.findOne({ where: { email } });

  if (!userSearch) {
    return 'Incorrect email or password';
  }

  // const { id, username, role, password } = userSearch as unknown as UserFullData;
  const { id, username, role } = userSearch as unknown as UserI;

  // if (!userSearch || password ==! passwordInput) {

  const token = createToken({ email, id, username, role });
  const result = {
    user: { id, username, role, email },
    token,
  };
  return result;
};

export default { login };

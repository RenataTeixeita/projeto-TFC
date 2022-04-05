import schemaLogin from './schemaLogin';

const verifyLogin = async (email: string, password: string) => {
  if (!email || !password) {
    return 'All fields must be filled';
  }
  try {
    const { error } = schemaLogin({ email, password });
    if (error) return error.details[0].message;
  } catch (err) {
    console.log(err);
  }
};

export default verifyLogin;

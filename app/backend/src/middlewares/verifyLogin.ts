import schemaLogin from './schemaLogin';

const verifyLogin = async (email: string, password: string) => {
  try {
    const { error } = schemaLogin.validate({ email, password });
    if (error) return error.details[0].message;
  } catch (err) {
    console.log(err);
  }
};

export default verifyLogin;

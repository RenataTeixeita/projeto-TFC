// import Users from '../database/models/Users';
// import createToken from '../middlewares/createToken';
// import schemaLogin from '../middlewares/schemaLogin';

// const login = async (email: string, password: string) => {
//   try {
//     const { error } = schemaLogin.validate({ email, password });
//     if (error) return { status: 400, message: error.details[0].message };
//     const userSearch = await Users.findOne({ where: { email } });
//     console.log('user: ', userSearch);
//     if (!userSearch) return { status: 400, message: 'Email não cadasrado' };
//     // if (userSearch.password ==!password) return { status: 400, message: 'Password invalido' };
//   } catch (err) {
//     console.log(err);
//   }
//   const userSearch = await Users.findOne({ where: { email } });
//   const token = createToken({ email, password });
//   const result = {
//     user: userSearch,
//     token,
//   };
//   console.log('result: ', result);
//   return result;
// };

// export default { login };

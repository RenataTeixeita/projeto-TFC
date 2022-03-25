import { DataTypes, Model } from 'sequelize';
import db from '.';

class Users extends Model {
  public username: string;

  public role: string;

  public email: string;

  public password: string;
}

Users.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    field: 'username',
    type: DataTypes.STRING,
  },
  role: {
    field: 'role',
    type: DataTypes.STRING,
  },
  email: {
    field: 'email',
    type: DataTypes.STRING,
  },
  password: {
    field: 'password',
    type: DataTypes.STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default Users;
